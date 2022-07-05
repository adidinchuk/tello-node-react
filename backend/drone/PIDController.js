class PIDController {

    coefficients = { kP: 0, kI: 0, kD: 0 };
    magnitudes = { p: 0, i: 0, d: 0 };
    memory = { clamp: false, error: 0, time: 0 };

    saturationLimitMax;
    saturationLimitMin;

    constructor(kP = 1, kI = 0, kD = 0.5, saturationLimitMax = 15, saturationLimitMin = -15) {        
        this.coefficients = { kP: kP, kI: kI, kD: kD };
        this.saturationLimitMax = saturationLimitMax;
        this.saturationLimitMin = saturationLimitMin;
    }

    getPIDOutput(error) {
        //generate timestamps for estimating rates of change
        var timestamp = (new Date()).getTime();
        //reset the memory time if the time delta is too high (> 0.1 second)
        if ((timestamp - this.memory.time) / 1000 > 0.1)
            this.memory.time = timestamp - 100;
        var timeDelta = (timestamp - this.memory.time) / 1000;
        //record the proportional value 
        this.magnitudes.p = error;
        //only accumulate the integral value if the clamp is inactive 
        if (!this.memory.clamp)
            this.magnitudes.i = this.magnitudes.i + error * timeDelta;

        //generate the derivative value 
        this.magnitudes.d = (error - this.memory.error) / timeDelta;
        //store the current step's error value
        this.memory.error = error;

        //generate the combined PID value
        var preSaturationFilterValue = this.rawPID();
        //clamp the value with the provided saturation limits
        var output = Math.min(Math.max(preSaturationFilterValue, this.saturationLimitMin), this.saturationLimitMax);

        //set the clamp flag if required for the next PID pass
        if (preSaturationFilterValue != output) {
            if (Math.sign(error) == Math.sign(preSaturationFilterValue))
                this.clamp = true;
            else
                this.clamp = false;
        }else
            this.clamp = false;
        //store the current timestamp for the next PID pass
        this.memory.time = (new Date()).getTime();
        return output;
    }
    // P * kP + I + kI + D * kD;
    rawPID() {
        return this.magnitudes.p * this.coefficients.kP +
         this.magnitudes.i * this.coefficients.kI + 
         this.coefficients.kD * this.magnitudes.d;        
    }

}

module.exports = PIDController;