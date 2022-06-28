const cv2 = require('opencv4nodejs');
const vision = require('./vision');

module.exports = {
    trackFace: (frame,) => {
        var faces = vision.detectFaces(frame);

        if (faces == undefined)
            return null;

        var primaryTarget = faces[0];
        faces.forEach((face) => {
            if (primaryTarget.height * primaryTarget.width < face.height * face.width)
                primaryTarget = face;
        });

        var target = {
            x: primaryTarget.x + (primaryTarget.width / 2),
            z: primaryTarget.y + (primaryTarget.height / 2)
        };

        frame.drawCircle(new cv2.Point2(target.x, target.z), 5, new cv2.Vec3(52, 209, 191), -1);
        frame.drawCircle(new cv2.Point2(frame.sizes[1] / 2, frame.sizes[0] / 2), 5, new cv2.Vec3(4, 231, 98), -1);

        return target;

    }
}