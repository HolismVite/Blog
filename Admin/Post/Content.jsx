import { Form, Rte, app, post } from '@Form'

const inputs = <>
    <Rte
        column='Content'
        placeholder='Write your post here ...'
    />
</>

const PostContent = () => {
    return <Form
        title='Edit content'
        entityType="BlogPostContent"
        inputs={inputs}
        large={true}
    />
}

export default PostContent