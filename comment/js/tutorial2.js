var converter=new Showdown.converter();
var count=0;

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
		console.log("commentList",this.props.data);
			var commentNodes=this.props.data.map(function(comment){
				return (
					<Comment author={comment.author}>
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
	
	loadCommentsFromServer:function()
	{
		var data=[
		  {author: "cuiweigang1", text: "This is one comment"},
		  {author: "cuiweigang2", text: "This is *another* comment"}
		];
		
		for(var i=0;i<data.length;i++)
		{
			data[i].author+=count;
		}
		
		count++;
		
		this.setState({data:data});
	},
	getInitialState:function(){ /**数据初始化*/
		return{data:[]};
	},
	
	componentDidMount:function(){ /**当数据发生变化时*/
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer,2000);
	},
	
	render:function(){
	 	console.log(this.state.data)
	 	
		return(
			<div className="commentBox">
			<h1>Comments</h1>
				<CommentList data={this.state.data} />
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
