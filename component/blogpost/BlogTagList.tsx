import BlogTag from './BlogTag';

interface BlogTagListProps {
    blogTagNameList: Set<string>;
}

const BlogTagList = (props: BlogTagListProps) => {
    return (
            <div className="flex flex-row flex-wrap gap-3">
                {
                    Array.from(props.blogTagNameList).map((blogTagName) => {
                        return <BlogTag key={blogTagName} tagName={blogTagName} isSelected={false}/>

                    })
                }
            </div>
    );
};

export default BlogTagList;
