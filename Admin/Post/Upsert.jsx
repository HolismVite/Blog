import { DialogForm, Text, LongText, Slug } from '@Form'

const inputs = <>
    <Text
        column="Title"
        placehodler="Title"
        required="Title is not written"
    />
    <Slug />
    <LongText
        column="Summary"
        placehodler="Summary"
    />
</>

const UpsertPost = () => {
    return <DialogForm
        entityType='BlogPost'
        humanReadableEntityType='Post'
        inputs={inputs}
    />
}

export default UpsertPost