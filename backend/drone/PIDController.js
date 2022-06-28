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

        var timestamp = (new Date()).getTime();
        if ((timestamp - this.memory.time) / 1000 > 5)
            this.memory.time = timestamp - 10;
        var timeDelta = (timestamp - this.memory.time) / 1000;
        this.magnitudes.p = error;

        if (!this.memory.clamp)
            this.magnitudes.i = this.magnitudes.i + error * timeDelta;

        this.magnitudes.d = (error - this.memory.error) / timeDelta;
        this.memory.error = error;

        var preSaturationFilterValue = this.rawPID();

        var output = Math.min(Math.max(preSaturationFilterValue, this.saturationLimitMin), this.saturationLimitMax);

        if (preSaturationFilterValue != output) {
            if (Math.sign(error) == Math.sign(preSaturationFilterValue))
                this.clamp = true;
            else
                this.clamp = false;
        }
        else
            this.clamp = false;

        this.memory.time = (new Date()).getTime();
        return output;
    }

    rawPID() {
        return this.magnitudes.p * this.coefficients.kP +
         this.magnitudes.i * this.coefficients.kI + 
         this.coefficients.kD * this.magnitudes.d;        
    }

}

module.exports = PIDController;