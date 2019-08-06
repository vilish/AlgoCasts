// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

    console.log(node.data + "  " + node.left + "   " + node.right + "  min " +
        min + "  max  " + max);
    // left side

    if (node.left) {
        if (node.left.data >= node.data) {
            return false;
        }

        // right side good?
        if (max && node.left.right && node.left.right.data >= max) {
            return false;
        }

        // test left side again
        validate(node.left, null, node.data)
    }


    //right side
    if (node.right) {
        if (node.right.data < node.data) {
            return false;
        }


        // left side good
        if (min && node.right.left && node.right.left.data >= min) {
            return false;
        }

        // test right side again
        validate(node.right, node.data, null)

    }

    return true;

}

module.exports = validate;