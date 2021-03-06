import {
  hiddenFromAT
} from '../util'

export default [{
  tagName: 'label'
, msg: 'Form controls using a label to identify them must be '
     + 'programmatically associated with the control using htmlFor'
, url: 'https://www.w3.org/WAI/tutorials/forms/labels'
, test (tagName, props) {
    const hidden = hiddenFromAT(props)
    const hasfor = typeof props.htmlFor === 'string'
    return hidden || hasfor
  }
}]


export const pass = [{
  when: 'the label is hidden'
, render: React => <label aria-hidden />
}, {
  when: 'the label has a valid `htmlFor` prop'
, render: React => <label htmlFor='foo' />
}, {
  when: 'it is not a label'
, render: React => <div />
}]

export const fail = [{
  when: 'a label is not hidden and has no `htmlFor`'
, render: React => <label />
}]

export const description = `
Enforce label tags have \`htmlFor\` attribute. Form controls using a \`label\` to
identify them must have only one label that is programmatically associated with
the control using: \`<label htmlFor={/* ID or name of control*/}>...</label>\`.
`

