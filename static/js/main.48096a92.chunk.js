(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(14),n(1)),s=n(2),i=n(4),u=n(3),p=n(5),h=n(6),f=(n(16),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){n.props.flipCellsAroundMe(n.props.coord)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),d=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={board:n.createBoard(),hasWon:!1},n.flipCellsAround=function(e){var t=n.props,a=t.ncols,r=t.nrows,o=n.state,c=o.board,l=o.hasWon,s=e.split("-").map(Number),i=Object(h.a)(s,2),u=i[0],p=i[1];[[u,p],[u+1,p],[u-1,p],[u,p+1],[u,p-1]].forEach(function(e){var t=Object(h.a)(e,2),n=t[0],o=t[1];o>=0&&o<a&&n>=0&&n<r&&(c[n][o]=!c[n][o])}),l=c.every(function(e){return e.every(function(e){return!e})}),n.setState({board:c,hasWon:l})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=this.props,t=e.ncols,n=e.nrows,a=e.chanceLightStartsOn,r=Array(n),o=0;o<n;o++){r[o]=Array(t);for(var c=0;c<t;c++)r[o][c]=Math.random()<a}return r}},{key:"genCells",value:function(){var e=this;return this.state.board.map(function(t,n){return r.a.createElement("tr",{key:n},t.map(function(t,a){var o="".concat(n,"-").concat(a);return r.a.createElement(f,{key:o,isLit:t,flipCellsAroundMe:e.flipCellsAround,coord:o})}))})}},{key:"render",value:function(){var e=r.a.createElement("table",{className:"board"},r.a.createElement("tbody",null,this.genCells())),t=r.a.createElement("div",{className:"win-message"},r.a.createElement("span",{className:"neon"},"You"),r.a.createElement("span",{className:"flux"},"Won"));return r.a.createElement("div",null,this.state.hasWon?t:e)}}]),t}(r.a.Component));d.defaultProps={ncols:5,nrows:5,chanceLightStartsOn:.25};var m=d,v=(n(20),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.48096a92.chunk.js.map