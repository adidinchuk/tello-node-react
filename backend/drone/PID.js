class PIDController{

    coefficients = { kP : 0, kI : 0, kD : 0 };   
    magnitudes = { p : [0, 0], i : [0, 0], d : [0, 0]};
    memory = { clamp : false, error : [0, 0], time : 0 };

    saturationLimitMax;
    saturationLimitMin;
    

    constructor(kP = 0.1, kI = 0.01, kD = 0.1, saturationLimitMax=40, saturationLimitMin=-20){
        this.coefficients = { kP : kP, kI : kI, kD : kD };  
        this.saturationLimitMax = saturationLimitMax;
        this.saturationLimitMin = saturationLimitMin;

    }

    getPIDOutput(error){
        //console.log(error);
        var timestamp = new Date();
        if((timestamp - this.memory.time) / 1000 > 5)
            this.memory.time = timestamp;
        var timeDelta = (timestamp - this.memory.time) / 1000;
        this.magnitudes.p = error;
        
        if(!this.memory.clamp)
            this.magnitudes.i = parseFloat(this.magnitudes.i) +  parseFloat(error) *  parseFloat(timeDelta);

        this.magnitudes.d = (error - this.memory.error) / timeDelta;
        this.memory.error = error;
        this.memory.time = new Date();
        //console.log(this.magnitudes)
        var preSaturationFilterValue = this.rawPID();
    
        var output = Math.min(Math.max(preSaturationFilterValue, this.saturationLimitMin), this.saturationLimitMax);

        if (preSaturationFilterValue != output)
        {
            if(Math.sign(error) == Math.sign(preSaturationFilterValue))
                this.clamp = true;            
            else            
            this.clamp = false;            
        }
        else        
        this.clamp = false;        
        
        return output;        
    }

    rawPID(){
        return this.magnitudes.p * this.coefficients.kP + 
        this.magnitudes.i * this.coefficients.kI + 
        this.coefficients.kD * this.magnitudes.d;
    }

   


}

module.exports = PIDController;