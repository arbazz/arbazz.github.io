(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/biryani.098a1225.gif"},38:function(e,t,a){e.exports=a.p+"static/media/cover.18827609.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/main-cover.142ebf4e.jpg"},48:function(e,t,a){e.exports=a(70)},53:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),i=(a(53),a(23),a(13)),s=a(21),o=a(8),m=a.n(o),u=a(11),d=a(3),h=a(4),p=a(6),E=a(5),v=a(14),f=a(7),b=a(10),g=a(35);a(59),a(60);g.initializeApp({apiKey:"AIzaSyCREpIN78VUAA7WZ0HwevmljktBIZzlUGI",authDomain:"firestore-a836f.firebaseapp.com",databaseURL:"https://firestore-a836f.firebaseio.com",projectId:"firestore-a836f",storageBucket:"firestore-a836f.appspot.com",messagingSenderId:"417597850680",appId:"1:417597850680:web:8b8ff293536d8b28"});var N=g,O=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(e){N.auth().signOut().then(function(){localStorage.setItem("isLogin",!1),alert("sucsses")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"input-field"},c.a.createElement("div",{className:"btn",onClick:this.handleSubmit.bind(this)},"SignOut"))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleLoginClick=a.handleLoginClick.bind(Object(v.a)(a)),a.handleLogoutClick=a.handleLogoutClick.bind(Object(v.a)(a)),a.state={isLoggedIn:!1,user:!1,admin:!1,logger:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){N.auth().signOut().then(function(){}).catch(function(e){}),this.setState({isLoggedIn:!1,user:!1,admin:!1,logger:!1})}},{key:"componentWillMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,N.auth().onAuthStateChanged(function(e){if(e){var a=N.firestore();a.collection("resturants").doc(e.email).get().then(function(n){n.exists?t.setState({admin:!0}):a.collection("users").doc(e.email).get().then(function(e){e.exists?t.setState({user:!0}):console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)})}).catch(function(e){console.log("Error getting document:",e)})}}).bind(this);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a=this.state,n=a.admin,r=a.user,l=a.logger;return e=!0===n?"/create":"/myrequest",t=n||r?c.a.createElement("span",{onClick:this.handleLogoutClick},c.a.createElement(O,null)):c.a.createElement("span",{onClick:this.handleLoginClick},c.a.createElement(i.c,{to:"/register"},"Login")),(n||r)&&(l=!0),c.a.createElement("nav",{className:""},c.a.createElement("div",{className:"nav-wrapper teal"},c.a.createElement(i.b,{to:"/",className:"brand-logo white-text"},"Hotel"),c.a.createElement("ul",{id:"mobile-nav",className:"right hide-on-med-and-down"},l&&c.a.createElement("li",{className:"lisofnav"},c.a.createElement(i.c,{to:e},c.a.createElement("div",{className:"btn-floating"},"P"))),c.a.createElement("li",{className:"lisofnav"},t))))}}]),t}(n.Component),y=Object(b.b)(function(e){return{login:e.loginData,getDAta:e}})(j),k=a(12),w=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).handleChange=function(t){e.setState(Object(k.a)({},t.target.id,t.target.value))},e.state={},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(){this.props.send(this.state),this.props.history.push("/")}},{key:"render",value:function(){return c.a.createElement("div",{className:"section container"},c.a.createElement("h4",null,"Login"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s4"}),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,placeholder:"EMAIL..."})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s4"}),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,placeholder:"PASSWORD..."})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s4"}),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("div",{className:"input-field btn",onClick:this.handleSubmit.bind(this)},"LOGIN")),c.a.createElement(i.b,{to:"/signup"},"  ",c.a.createElement("div",{className:"input-field btn-small"},"Signup")))))}}]),t}(n.Component),C=Object(b.b)(null,function(e){return{send:function(t){return e(function(e){return{type:"SET_USER",data:e}}(t))}}})(w),S=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.login;return c.a.createElement("div",{className:"container"},c.a.createElement("section",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("h4",null,"Register")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},!e.login&&c.a.createElement(i.c,{to:"/user"},c.a.createElement("div",{className:"btn-large wave-effect"},"User")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement(i.c,{to:"/resturant"},c.a.createElement("div",{className:"btn-large wave-effect"},"Resturant")))))}}]),t}(n.Component),x=Object(b.b)(function(e){return{login:e.loginData}})(S),I=a(26),D=a.n(I),M=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={email:"",password:"",ownerName:"",resturantName:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(){var e=this.state,t=e.email,a=e.password,n=e.ownerName,c=e.resturantName;D.a.auth().createUserWithEmailAndPassword(t,a).catch(function(e){var t=e.message;alert(t)});var r=D.a.firestore();t&&r.collection("resturants").doc(t).set({ownerName:n,resturantName:c,email:t}).then(function(e){alert("sucess"),this.props.history.push("/create")}).catch(function(e){console.error("Error adding document: ",e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card-panel"},c.a.createElement("h4",{className:"header2"},"Resturant Sign up"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("i",{className:"mdi-action-account-circle prefix"}),c.a.createElement("input",{id:"ownerName",onChange:this.handleChange,type:"text",className:"validate"}),c.a.createElement("label",{forhtml:"first_name"},"Name"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("i",{className:"mdi-communication-email prefix"}),c.a.createElement("input",{id:"email",onChange:this.handleChange,type:"email",className:"validate"}),c.a.createElement("label",{forhtml:"email"},"Email"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("i",{className:"mdi-action-lock-outline prefix"}),c.a.createElement("input",{id:"password",onChange:this.handleChange,type:"password",className:"validate"}),c.a.createElement("label",{forhtml:"password"},"Password"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("i",{className:"mdi-action-question-answer prefix"}),c.a.createElement("textarea",{id:"resturantName",onChange:this.handleChange,className:"materialize-textarea validate",length:"120"}),c.a.createElement("label",{forhtml:"ResturantName"},"Resturant Name"),c.a.createElement("span",{className:"character-counter"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("button",{className:"btn cyan waves-effect waves-light right",onClick:this.handleSubmit},"Submit",c.a.createElement("i",{className:"mdi-content-send right"})))))))))}}]),t}(n.Component),P=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("div",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("i",{className:"material-icons prefix"},"search"),c.a.createElement("input",{type:"text",id:"search",placeholder:"Search..."}))),c.a.createElement("div",{className:"col s3 m3 l4"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",className:"filled-in"}),c.a.createElement("span",null,"Sort By Ratings"))))}}]),t}(n.Component),A=a(27),L=a.n(A),_=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.header,n=t.price,c=t.email,r=N.firestore();N.auth().onAuthStateChanged(function(e){if(e){var t=e.email;r.collection("users").doc(t).collection("order").add({name:a,price:n,email:c,status:"pending"}),r.collection("resturants").doc(c).collection("sell").add({name:a,price:n,emails:t,orderStatus:"pending"})}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row",id:this.props.email},c.a.createElement("div",{className:"col s12 m10 pull-m2"},c.a.createElement("h5",{className:"header"},this.props.header),c.a.createElement("div",{className:"card horizontal"},c.a.createElement(i.b,{to:{pathname:"/details",state:{data:this.props}}},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:L.a,alt:L.a}))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,this.props.content)),c.a.createElement("div",{className:"card-action"},c.a.createElement("div",{onClick:this.handleClick.bind(this),className:"btn btn-floating green"},c.a.createElement("i",{className:"material-icons"},"add")),c.a.createElement("p",null,"Price Rs ",this.props.price),c.a.createElement("p",null,"Ratings")))))))}}]),t}(n.Component),R=N.firestore(),z=function(){return function(e){R.collection("items").doc("bbq").collection("1").get().then(function(e){e.exists&&console.log(e.data())}).catch(function(e){console.log("Error getting document:",e)})}},T=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={markers:[]},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.send_data(),this.getMarkers();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMarkers",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.firestore().collection("chinese").get().then(function(e){e.docs.forEach(function(e){t.push(e.data()),a.setState({markers:t})})});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,e&&e.markers.map(function(e){return c.a.createElement(_,{email:e.email,price:e.price,header:e.name,key:e.name,content:e.decription})}))}}]),t}(n.Component),U=Object(b.b)(function(e){return{items:e}},function(e){return{send_data:function(){return e(z())}}})(T),q=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={markers:[]},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.send_data(),this.getMarkers();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMarkers",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.firestore().collection("fastfood").get().then(function(e){e.docs.forEach(function(e){t.push(e.data()),a.setState({markers:t})})});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,e&&e.markers.map(function(e){return c.a.createElement(_,{email:e.email,price:e.price,header:e.name,key:e.name,content:e.decription})}))}}]),t}(n.Component),W=Object(b.b)(function(e){return{items:e}},function(e){return{send_data:function(){return e(z())}}})(q),B=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={markers:[]},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.send_data(),this.getMarkers();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMarkers",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.firestore().collection("bbq").get().then(function(e){e.docs.forEach(function(e){t.push(e.data()),a.setState({markers:t})})});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,e&&e.markers.map(function(e){return c.a.createElement(_,{email:e.email,price:e.price,header:e.name,key:e.name,content:e.decription})}))}}]),t}(n.Component),F=Object(b.b)(function(e){return{items:e}},function(e){return{send_data:function(){return e(z())}}})(B),G=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={markers:[]},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.send_data(),this.getMarkers();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMarkers",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.firestore().collection("deserts").get().then(function(e){e.docs.forEach(function(e){t.push(e.data()),a.setState({markers:t})})});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,e&&e.markers.map(function(e){return c.a.createElement(_,{email:e.email,price:e.price,header:e.name,key:e.name,content:e.decription})}))}}]),t}(n.Component),$=Object(b.b)(function(e){return{items:e}},function(e){return{send_data:function(){return e(z())}}})(G),H=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={chinese:!0,fastfood:!0,bbq:!0,deserts:!0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"toggler",value:function(e){this.setState(Object(k.a)({chinese:!1,fastfood:!1,bbq:!1,deserts:!1},e.target.id,!0))}},{key:"render",value:function(){var e=this.state,t=e.chinese,a=e.fastfood,n=e.bbq,r=e.deserts;return c.a.createElement("div",null,c.a.createElement("div",{className:"container left"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3 l3 catbtn"},c.a.createElement("div",{id:"chinese",className:"btn waves-effect orange lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"Chinese")),c.a.createElement("div",{className:"col s6 m3 l3 catbtn"},c.a.createElement("div",{id:"fastfood",className:"btn waves-effect red lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"Fast Food")),c.a.createElement("div",{className:"col s6 m3 l3 catbtn"},c.a.createElement("div",{id:"bbq",className:"btn waves-effect brown lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"BBq")),c.a.createElement("div",{className:"col s6 m3 l3 catbtn"},c.a.createElement("div",{id:"deserts",className:"btn waves-effect pink lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"Deserts")))),t&&c.a.createElement(U,null),a&&c.a.createElement(W,null),n&&c.a.createElement(F,null),r&&c.a.createElement($,null))}}]),t}(n.Component),J=a(45),Z=a.n(J),K=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 z-depth-0 "},c.a.createElement("img",{src:"mainCover",className:"main-cover",alt:Z.a}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement(P,null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 offset-m2"},c.a.createElement(H,{toggler:this.state})))))}}]),t}(n.Component),V=N.firestore(),Y=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={email:"2"},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,N.auth().onAuthStateChanged(function(e){e&&(t.setState({email:e.email}),"2"!==t.state.email&&t.getMarkers())}),this.props.send_data();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMarkers",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a,n=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=this.state.email,e.next=4,N.firestore().collection("users").doc(a).collection("order").get().then(function(e){e.docs.forEach(function(e){t.push(e.data()),n.setState({markers:t})}),console.log(n.state)});case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="",t="";this.props.email.todos.length>0&&(e=this.props.email.todos[0].email,t=this.props.email.todos[1].first);var a=this.state.markers;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6"},"name: ",t&&t),c.a.createElement("div",{className:"col s6"},"email: ",e&&e)),c.a.createElement("section",null,c.a.createElement("table",{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Item Name"),c.a.createElement("th",null,"Item Price"))),c.a.createElement("tbody",null,a&&a.map(function(e){return c.a.createElement("tr",{key:e.name},c.a.createElement("td",null,e.status),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.price))})))))}}]),t}(n.Component),Q=Object(b.b)(function(e){return{email:e.user}},function(e){return{send_data:function(){return e(function(e){var t=[];N.auth().onAuthStateChanged(function(a){a&&(t.push(a),V.collection("users").doc(t[0].email).get().then(function(a){a.exists?(t.push(a.data()),e({type:"UPDATE_TODOS",payload:t})):console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)}))})})}}})(Y),X=a(24),ee=a(25),te={menuItem:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(ee.a)({},e,{state:t.payload});default:return e}},ne={email:"",password:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":e=Object(ee.a)({},e,{login:t.data});var a=t.data.email,n=t.data.password;N.auth().signInWithEmailAndPassword(a,n).catch(function(e){var t=e.message;alert(t)});default:return e}},re=N.firestore(),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{todos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TODOS":return Object(ee.a)({},e,{todos:t.payload});default:return e}},ie=Object(X.c)({items:ae,loginData:ce,singupData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIGNUP":var a=t.data.lastName,n=t.data.age,c=t.data.lastName,r=t.data.email,l=t.data.country,i=t.data.city;return re.collection("users").doc(r).set({first:a,last:n,age:c,email:r,country:l,city:i}).then(function(e){alert("sucess")}).catch(function(e){console.error("Error adding document: ",e)}),e;default:return e}},user:le}),se=a(46),oe=a(47),me=a.n(oe),ue=Object(X.a)(se.a,me.a),de=Object(X.d)(ie,ue),he=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Item Name"),c.a.createElement("th",null,"Item Price"),c.a.createElement("th",null,"Set to progress"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Pending"),c.a.createElement("td",null,"Eclair"),c.a.createElement("td",null,"$0.87"),c.a.createElement("td",{className:"center"},c.a.createElement("div",{className:"btn-floating waves-effect waves-light red"},c.a.createElement("i",{className:"material-icons"},"add")))))))}}]),t}(n.Component),pe=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Item Name"),c.a.createElement("th",null,"Item Price"),c.a.createElement("th",null,"Set to delievered"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Progress"),c.a.createElement("td",null,"Eclair"),c.a.createElement("td",null,"$0.87"),c.a.createElement("td",{className:"center"},c.a.createElement("div",{className:"btn-floating waves-effect waves-light red"},c.a.createElement("i",{className:"material-icons"},"add")))))))}}]),t}(n.Component),Ee=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Item Name"),c.a.createElement("th",null,"Item Price"),c.a.createElement("th",null,"Set Status to Delievered"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Delievered"),c.a.createElement("td",null,"Eclair"),c.a.createElement("td",null,"$0.87"),c.a.createElement("td",{className:"center"},c.a.createElement("div",{className:"btn-floating waves-effect waves-light red"},c.a.createElement("i",{className:"material-icons"},"add")))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s10 push-m6"},c.a.createElement("div",{className:"btn green darken-1"},"Delievered"))))}}]),t}(n.Component),ve=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={pending:!0,progress:!1,delieverd:!1},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"toggler",value:function(e){this.setState(Object(k.a)({pending:!1,progress:!1,delieverd:!1},e.target.id,!0))}},{key:"render",value:function(){var e=this.state,t=e.pending,a=e.progress,n=e.delieverd;return c.a.createElement("section",{className:"container admin"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m4"},c.a.createElement("div",{id:"pending",className:"btn waves-effect teal lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"Pending")),c.a.createElement("div",{className:"col s12 m4"},c.a.createElement("div",{id:"progress",className:"btn waves-effect blue lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"progress")),c.a.createElement("div",{className:"col s12 m4"},c.a.createElement("div",{id:"delieverd",className:"btn waves-effect green lighten-2 catbtn z-depth-0",onClick:this.toggler.bind(this)},"Delieverd"))),c.a.createElement("div",{className:"row"},t&&c.a.createElement(he,null),a&&c.a.createElement(pe,null),n&&c.a.createElement(Ee,null)))}}]),t}(n.Component),fe=a(38),be=a.n(fe),ge=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"section card-list"},c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:L.a,alt:L.a}),c.a.createElement("span",{className:"card-title"},this.props.tittle)),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,this.props.content),c.a.createElement("p",null,this.props.price)),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:"/#"},"Request To Deliever"))))))}}]),t}(n.Component),Ne=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("p",{className:"flow-text"},"Reviews")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s3"},c.a.createElement("p",null,"Type Your Review")),c.a.createElement("div",{className:"col s9"},c.a.createElement("div",{className:"input-filed"},c.a.createElement("input",{type:"text",placeholder:"Review"}))))))}}]),t}(n.Component),Oe=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).state={email:2,data:""},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({data:this.props.location.state.data,email:this.props.location.state.data.email})}},{key:"componentDidMount",value:function(){2!==this.state.email&&this.getMarkers()}},{key:"getMarkers",value:function(){var e=Object(u.a)(m.a.mark(function e(){var t,a,n=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.email,a=[],e.next=4,N.firestore().collection("resturants").doc(t).collection("item").get().then(function(e){e.docs.forEach(function(e){a.push(e.data()),n.setState({markers:a})})});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.markers;return c.a.createElement("div",{className:"container section"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("img",{className:"cover-img",src:be.a,alt:be.a}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("h2",{className:"flow-text"},"Hotel"),c.a.createElement("hr",null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3 "},c.a.createElement("div",{className:"btn-large"},"Cat")),c.a.createElement("div",{className:"col s6 m3 "},c.a.createElement("div",{className:"btn-large"},"Cat")),c.a.createElement("div",{className:"col s6 m3 "},c.a.createElement("div",{className:"btn-large"},"Cat")),c.a.createElement("div",{className:"col s6 m3 "},c.a.createElement("div",{className:"btn-large"},"Cat"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m4 l3"},t&&t.map(function(t){return c.a.createElement(ge,{key:t.price,tittle:t.name,price:t.price,content:e.content})}))),c.a.createElement(Ne,null))}}]),t}(n.Component),je=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value))},a.state={firstName:"",lastName:"",gender:"",city:"",age:"",email:"",password:"",country:"",login:!0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handlClick",value:function(e){var t=this.state,a=t.email,n=t.password;N.auth().createUserWithEmailAndPassword(a,n).catch(function(e){var t=e.message;alert(t)}),this.props.send(this.state)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container section"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col m3"}),c.a.createElement("div",{className:"col s6 m4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleSubmit,placeholder:"first name"}))),c.a.createElement("div",{className:"col s6 m4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleSubmit,placeholder:"last name"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col m3"}),c.a.createElement("div",{className:"col s6 m4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"gender",onChange:this.handleSubmit,placeholder:"gender"}))),c.a.createElement("div",{className:"col s6 m4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"city",onChange:this.handleSubmit,placeholder:"city"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col m3"}),c.a.createElement("div",{className:"col s6 m4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"age",onChange:this.handleSubmit,placeholder:"age"}))),c.a.createElement("div",{className:"col s6 m4"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"country",onChange:this.handleSubmit,placeholder:"country"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col m3"}),c.a.createElement("div",{className:"col s12 m8"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"email",id:"email",onChange:this.handleSubmit,placeholder:"email"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col m3"}),c.a.createElement("div",{className:"col s12 m8"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"password",id:"password",onChange:this.handleSubmit,placeholder:"password"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s3"}),c.a.createElement("div",{className:"col s8 push-2"},c.a.createElement("div",{onClick:function(){e.handlClick()},className:"input-field btn"},"Sign up"))))}}]),t}(n.Component),ye=Object(b.b)(null,function(e){return{send:function(t){return e(function(e){return{type:"SET_SIGNUP",data:e}}(t))}}})(je),ke=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={name:"",category:"",price:"",decription:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(){var e=this,t=this.state,a=t.name,n=t.category,c=t.price,r=t.decription,l=D.a.firestore();n&&D.a.auth().onAuthStateChanged(function(t){if(t){l.collection(n).doc(a).set({name:a,category:n,price:c,decription:r,email:t.email,id:new Date}).then(function(e){}).catch(function(e){console.error("Error adding document: ",e)});var i=t.email;l.collection("resturants").doc(i).collection("item").add({name:a,category:n,price:c,decription:r,email:t.email}).then(function(t){alert("sucess"),e.porps.history.push("/")}).catch(function(e){console.error("Error adding document: ",e)})}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card-panel"},c.a.createElement("h4",{className:"header2"},"Form with placeholder"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"Tikka",onChange:this.handleChange,id:"name",type:"text"}),c.a.createElement("label",{htmlFor:"name",className:"active"},"Name")),c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"category",onChange:this.handleChange,id:"category",type:"text"}),c.a.createElement("label",{htmlFor:"category",className:"active"},"Category")),c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"price",onChange:this.handleChange,id:"price",type:"text"}),c.a.createElement("label",{htmlFor:"price",className:"active"},"Price"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("textarea",{placeholder:"Oh WoW! Let me check this one too.",id:"decription",onChange:this.handleChange,className:"materialize-textarea"}),c.a.createElement("label",{htmlFor:"decription",className:"active"},"Decription")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("button",{className:"btn cyan waves-effect waves-light right",onClick:this.handleSubmit,type:"submit"},"Submit",c.a.createElement("i",{className:"mdi-content-send right"}))))))))))}}]),t}(n.Component);var we=function(){return c.a.createElement(b.a,{store:de},c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(y,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:K}),c.a.createElement(s.a,{path:"/user",component:C}),c.a.createElement(s.a,{path:"/register",component:x}),c.a.createElement(s.a,{path:"/resturant",component:M}),c.a.createElement(s.a,{path:"/myrequest",component:Q}),c.a.createElement(s.a,{path:"/adminresturant",component:ve}),c.a.createElement(s.a,{path:"/details",component:Oe}),c.a.createElement(s.a,{path:"/signup",component:ye}),c.a.createElement(s.a,{path:"/create",component:ke})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.3eacbb43.chunk.js.map