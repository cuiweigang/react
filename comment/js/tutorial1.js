var converter=new Showdown.converter();

var Comment=React.createClass(
	{
		render:function(){
			
			var rawMarkup=converter.makeHtml( this.props.children.toString());
			return(
				<div className="comment">
					<h2 className="commentAuthor">
					{this.props.author}
					</h2>
				   <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
				</div>
			)
		}
	});


var CommentList=React.createClass({
	render:function(){
		console.log(this.props);
			var commentNodes=this.props.data.map(function(comment){
				return (
					<Comment auth={comment.author}>
						{comment.text}
					</Comment>
				);
			});
		
		return (
			<div className="commonList">
				 {commentNodes}
			</div>
		);
	}
});

var CommentForm=React.createClass({
	render:function(){
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
			</div>
		)
	}
	
});

var CommentBox=React.createClass({
	render:function(){
		return(
			<div className="commentBox">
			<h1>Comments</h1>
				<CommentList data={this.props.data} />
			</div>
		)
	}
});

/**
 * 数据源
 */
 var data=[
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.render(
	<CommentBox data={data}/>,
	document.getElementById("content")
);
