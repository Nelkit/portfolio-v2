import React from "react"

class Tag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {tags: props.tagsString.split(",") };
    }

    separateTags (){
        var tagsString = this.props.tagsString
        
        if (tagsString != null){

            console.log(this.state)
        }
    }

    componentDidMount(){
        this.separateTags()
    }

    render() {
        return (
            <div className="Tag">
                {this.state.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        )
    }
}

export default Tag