import ArticleIcon from '@mui/icons-material/Article';
import BlogHierarchies from './Hierarchy/Tree'
import { BlogPosts } from './Post/List'
import PostContent from './Post/Content'

const BlogRoutes = [
    {
        path: "/posts",
        component: BlogPosts
    },
    {
        path: "/post/editContent",
        component: PostContent
    },
    {
        path: "/blogCategories",
        component: BlogHierarchies
    }
]

const BlogMenu = [
    {
        title: "Blog",
        icon: ArticleIcon,
        children: [
            {
                title: "Posts",
                url: "/posts"
            },
            {
                title: "Comments",
                url: "/comments?entityType=blogPost"
            },
            {
                title: "Categories",
                url: "/blogCategories?entityType=blogPost"
            },
            {
                title: "Tags",
                url: "/tags?entityType=blogPost"
            }
        ]
    }
]

export { BlogRoutes }
export { BlogPosts }
export { BlogMenu }