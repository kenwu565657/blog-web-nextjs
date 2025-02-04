import BlogTag from './BlogTag';

interface BlogTagListProps {
    blogTagNameList: string[];
}

const BlogTagList = (props: BlogTagListProps) => {
    return (
        <div className="bg-emerald-700 max-w-64 border-solid border-2 flex flex-col gap-y-10 p-3 divide-y-5">
            <h6>Search By Tags</h6>
            <input></input>
            <div className="w-30 flex flex-row flex-wrap gap-3 border-y-4 border-solid p-3">
                {
                    props.blogTagNameList.map((blogTagName) => {
                        return <BlogTag key={blogTagName} tagName={blogTagName} isSelected={true}/>

                    })
                }
            </div>

            <div className="w-30 flex flex-row flex-wrap  gap-3 border-t-4 border-solid p-3">
                {
                    props.blogTagNameList.map((blogTagName) => {
                        return (
                            <BlogTag key={blogTagName} tagName={blogTagName} isSelected={false}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BlogTagList;
