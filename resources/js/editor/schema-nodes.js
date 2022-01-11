import {schema as basicSchema} from "prosemirror-schema-basic";
import {addListNodes} from "prosemirror-schema-list";

const baseNodes = addListNodes(basicSchema.spec.nodes, "paragraph block*", "block");

const callout = {
    attrs: {
        type: {default: 'info'},
    },
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [
        {tag: 'p.callout.info', attrs: {type: 'info'}, priority: 75,},
        {tag: 'p.callout.success', attrs: {type: 'success'}, priority: 75,},
        {tag: 'p.callout.danger', attrs: {type: 'danger'}, priority: 75,},
        {tag: 'p.callout.warning', attrs: {type: 'warning'}, priority: 75,},
        {tag: 'p.callout', attrs: {type: 'info'}, priority: 75},
    ],
    toDOM(node) {
        const type = node.attrs.type || 'info';
        return ['p', {class: 'callout ' + type}, 0];
    }
};

const nodes = baseNodes.append({
    callout,
});

export default nodes;