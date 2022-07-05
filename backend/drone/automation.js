const cv2 = require('opencv4nodejs');
const vision = require('./vision');

module.exports = {
    trackFace: (frame) => {
        //generate faces array
        var faces = vision.detectFaces(frame);
        if (faces == undefined)
            return null;
        //identify primary face object
        var target = faces[0];
        faces.forEach((face) => {
            if (target.height * target.width < face.height * face.width)
                target = face;
        });
        //generate pixle target for the identified face object
        return module.exports.generateTarget(target, frame);
    },
    trackFaces: (frame) => {
        //generate faces array
        var faces = vision.detectFaces(frame);
        if (faces == undefined)
            return null;
        //variable for storing concatinated face object borders and center
        var targetRange = { x_max: -1, x_min: frame.sizes[1], y_max: -1, y_min: frame.sizes[0] };
        //identify the min/max boarders across all the detected face objects
        faces.forEach((face) => {
            targetRange.x_max = Math.max(face.x + (face.width), targetRange.x_max);
            targetRange.x_min = Math.min(face.x, targetRange.x_min);
            targetRange.y_max = Math.max(face.y + (face.height), targetRange.y_max);
            targetRange.y_min = Math.min(face.y, targetRange.y_min);
        });
        //generate rectangle object representing the combined face objects 
        var target = new cv2.Rect(
            targetRange.x_min,
            targetRange.y_min,
            targetRange.x_max - targetRange.x_min,
            targetRange.y_max - targetRange.y_min
        );
        //draw debug border
        frame.drawRectangle(target, new cv2.Vec(138, 201, 38), 2, cv2.LINE_8);
        //generate pixle target for the identified face objects
        return module.exports.generateTarget(target, frame);
    },
    generateTarget: (target, frame) => {
        //identify the centerpoint for the target along with what % of the overall frame is spanned (width and height)
        var target = {
            x: target.x + (target.width / 2),
            z: target.y + (target.height / 2),
            percent_x: target.width / frame.sizes[1],
            percent_z: target.height / frame.sizes[0]
        };
        //draw debug points for the frame's center and the target's center
        frame.drawCircle(new cv2.Point2(target.x, target.z), 5, new cv2.Vec3(52, 209, 191), -1);
        frame.drawCircle(new cv2.Point2(frame.sizes[1] / 2, frame.sizes[0] / 2), 5, new cv2.Vec3(4, 231, 98), -1);

        return target;
    }
}