
const cv2 = require('opencv4nodejs');
const util = require('./util');
faceDetectionClassifier = new cv2.CascadeClassifier(cv2.HAAR_FRONTALFACE_ALT2);

module.exports = {
    detectFaces: (frame) => {
        const { objects, numDetections } = faceDetectionClassifier.detectMultiScale(frame.bgrToGray(), { scaleFactor: 1.2, minSize: new cv2.Size(100, 100) });
        if (!objects.length) {
            return;
        } else {
            // draw detection
            const numDetectionsTh = 5;
            var final = [];
            objects.forEach((rect, i) => {                
                if (numDetections[i] > numDetectionsTh) {
                    final.push(rect);
                    const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
                    util.drawBlueRect(frame, rect, { thickness });
                }
            });
            if (final.length > 0)
                return final;
            else
                return undefined;
        }
    }
}