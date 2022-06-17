
const cv2 = require('opencv4nodejs');
const util = require('./util');
faceDetectionClassifier = new cv2.CascadeClassifier(cv2.HAAR_FRONTALFACE_ALT2);

module.exports = {
    detectFace: (frame) => {
        const { objects, numDetections } = faceDetectionClassifier.detectMultiScale(frame.bgrToGray(), { scaleFactor: 1.2, minSize: new cv2.Size(100, 100) });
        if (!objects.length) {
            return;
        } else {
            // draw detection
            const numDetectionsTh = 10;
            objects.forEach((rect, i) => {
                if (numDetections[i] > numDetectionsTh) {
                    const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
                    util.drawBlueRect(frame, rect, { thickness });
                }
            });
        }
        
    }
}