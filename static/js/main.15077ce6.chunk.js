(this["webpackJsonpuniversity-blog"]=this["webpackJsonpuniversity-blog"]||[]).push([[0],{169:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),c=t(40),s=t.n(c),o=t(79),r=t(25),d=t(8),l="UI articles load",h="articles Active",p="UI weare info",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return Object(d.a)(Object(d.a)({},e),{},{articles:Object(r.a)(n.payload)});default:return e}},j=t(127),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return Object(d.a)(Object(d.a)({},e),{},{active:Object(d.a)({},n.payload)});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(d.a)(Object(d.a)({},e),{},{weare:Object(r.a)(n.payload)});default:return e}},O=Object(o.b)({articles:x,articlesActive:b,infoWeare:f}),u="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,g=Object(o.d)(O,u(Object(o.a)(j.a))),m=t(31),w=t(17),y=t(22),v=t(6),k=t(201),z=t(213),C=t(202),J=t(203),E=t(217),I=t(42),S=t.n(I),A=t(54),B=t(84);t(170),t(159);B.a.initializeApp({apiKey:"AIzaSyBLwIVbSOXUXQgUMFBGqR1H6J3NHxKUajI",authDomain:"universityblog-59c43.firebaseapp.com",projectId:"universityblog-59c43",storageBucket:"universityblog-59c43.appspot.com",messagingSenderId:"199097158690",appId:"1:199097158690:web:692fc55c4f2a2834634e7b"});var N,D,T,R,V,F,W,L,M,H,P,q,K,_,U,X,G,Y,$,Q,Z,ee,ne,te,ie,ae,ce,se,oe,re,de,le,he,pe,xe,je,be,fe,Oe,ue,ge,me,we,ye,ve,ke,ze,Ce,Je,Ee,Ie,Se,Ae,Be,Ne,De,Te,Re,Ve,Fe,We,Le,Me,He,Pe,qe,Ke,_e,Ue,Xe,Ge,Ye,$e,Qe,Ze,en,nn,tn,an,cn,sn,on,rn,dn,ln=B.a.firestore(),hn=function(){var e=Object(A.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln.collection("/articles/").get();case 2:return n=e.sent,t=[],n.forEach((function(e){t.push(Object(d.a)({id:e.id},e.data()))})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pn=hn,xn=function(e){return{type:l,payload:e}},jn=function(e,n){return{type:h,payload:Object(d.a)({id:e},n)}},bn=t(7),fn=t(212),On=t(24),un=t(3),gn=bn.a.img(N||(N=Object(v.a)(["\n    width: 100vw;\n    height: 100vh;\n"]))),mn=bn.a.div(D||(D=Object(v.a)(["\n    position: absolute;\n    height: 50vh;\n    top: 50vh;\n    left: 140px;\n    background-color: #393E46;\n    @media (min-width: 1200px){\n        width: 605px;\n    }\n    @media (min-width: 1400px){\n        left: 140px;\n        width: 705px;\n    }\n"]))),wn=bn.a.div(T||(T=Object(v.a)(["\n    display: flex;\n    position: absolute;\n    left: 140px;\n    top: 40px;\n"]))),yn=bn.a.p(R||(R=Object(v.a)(["\n        font-weight: 700;\n        font-size: 32px;\n    @media (min-width: 1200px){\n        margin-left: 150px;\n        margin-top: 10px;\n    }\n    @media (min-width: 1400px){\n        margin-left: 280px;\n        margin-top: 20px;\n    }\n"]))),vn=Object(bn.a)(fn.b)(V||(V=Object(v.a)(["\n    border: none; \n    background-color: #ffffff;\n"]))),kn=bn.a.p(F||(F=Object(v.a)(["\n    font-weight: 400;\n    font-size: 16px;\n    margin: 48px 50px 9px 50px;\n    color: #ffffff;\n"]))),zn=bn.a.h1(W||(W=Object(v.a)(["\n    font-weight: 700px;\n    color: #ffffff;\n    font-weight: 700;\n    @media (min-width: 1200px){\n        line-height: 80px;\n        font-size: 40px;\n    }\n    @media (min-width: 1400px){\n        font-size: 32px;\n        line-height: 40px;\n    }\n    margin: 0px 50px 12px 50px;\n    @media (min-width: 1600px){\n        font-size: 44px;\n        line-height: 80px;\n    }\n"]))),Cn=bn.a.p(L||(L=Object(v.a)(["\n    font-size: 21px;\n    font-weight: 400;\n    line-height: 32px;\n    margin: 0px 50px 32px 50px;\n    color: #949799;\n"]))),Jn=bn.a.button(M||(M=Object(v.a)(["\n    margin-left: 50px;\n    width: 155px;\n    height: 55px;\n    background: #ffffff;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 24px;\n"]))),En=function(){return Object(un.jsxs)("div",{className:"d-none d-sm-flex",children:[Object(un.jsxs)(wn,{children:[Object(un.jsxs)(fn.a,{children:[Object(un.jsx)(vn,{children:Object(un.jsx)(On.d,{style:{fontSize:"25px"}})}),Object(un.jsxs)(fn.d,{children:[Object(un.jsx)(w.b,{to:"/articles",children:Object(un.jsx)(fn.c,{children:"Inicio"})}),Object(un.jsx)(w.b,{to:"/weare",children:Object(un.jsx)(fn.c,{children:"Nosotros"})}),Object(un.jsx)(w.b,{to:"/everyone",children:Object(un.jsx)(fn.c,{children:"Ver mas Art\xedculos"})})]})]}),Object(un.jsx)(yn,{children:"Information Blog of COVID-19"})]}),Object(un.jsx)(gn,{src:"https://i.ibb.co/DMdKmjs/Prueba-Presentacion.png",alt:"covid-image"}),Object(un.jsxs)(mn,{children:[Object(un.jsx)(kn,{children:"Travels"}),Object(un.jsx)(zn,{children:"When Is The Best Time of Year To Visit Japan?"}),Object(un.jsx)(Cn,{children:"The good news for travelers is that there is no single best time of year to travel to Japan..."}),Object(un.jsx)(Jn,{children:"Read more"})]})]})},In=bn.a.img(H||(H=Object(v.a)(["\n    width: 500px;\n    height: 500px;\n    margin-left: 140px;\n    padding-top: 40px;\n"]))),Sn=bn.a.div(P||(P=Object(v.a)(["\n    background-color: #393E46;\n    padding-bottom: 50px;\n"]))),An=bn.a.div(q||(q=Object(v.a)(["\n    @media (min-width: 1200px){\n        width: 700px;\n    }\n    @media (min-width: 1400px){\n        width: 800px;\n    }\n    @media (min-width: 1600px){\n        width: 1200px;\n    }\n    color: #000000;\n    background: #ffffff;\n    height: 200px;\n    position: absolute;\n    left: 500px;\n    margin-top: 60px;\n"]))),Bn=bn.a.div(K||(K=Object(v.a)(["\n    color: #ffffff;\n    position: absolute;\n    display: flex;\n    margin-top: 280px;\n    @media (min-width: 1200px){\n        left: 650px; \n    }\n    @media (min-width: 1400px){\n        left: 700px;\n    }\n    @media (min-width: 1600px){\n        left: 900px;\n    }\n"]))),Nn=Object(bn.a)(k.a)(_||(_=Object(v.a)(["\n    box-shadow: 0px 2px 10px #faf8f7;\n   @media (min-width: 1200px){\n        width: 900px;\n    }\n    @media (min-width: 1400px){\n        width: 1000px;\n    }\n    @media (min-width: 1600px){\n        width: 1400px;\n        left: 380px;\n    }\n    position: absolute;\n    left: 300px;\n    color: #000000;\n    margin-top: 400px;\n    background-color: #ffffff;\n    width: 900px;\n    height: 80px;\n"]))),Dn=bn.a.p(U||(U=Object(v.a)(["\n    font-size: 34px;\n    padding: 15px 20px 0px 20px;\n    font-weight: 700;\n"]))),Tn=bn.a.p(X||(X=Object(v.a)(["\n    margin: 10px 0px 10px 20px;\n    color: #949799;\n    font-size: 21px;\n"]))),Rn=bn.a.p(G||(G=Object(v.a)(["\n    font-size: 30px;\n    font-weight: 700;\n    padding: 10px 10px;\n    text-align: center;\n"]))),Vn=bn.a.p(Y||(Y=Object(v.a)(["\n    padding: 0px 25px;\n    font-size: 18px;\n    font-weight: 600; \n"]))),Fn=Object(bn.a)(C.a)($||($=Object(v.a)(["\n    padding-top: 5px;\n    padding-left: 300px;\n    \n"]))),Wn=Object(bn.a)(J.a)(Q||(Q=Object(v.a)(["\n    background: #e3e6e9;\n    text-align: center;\n    height: 20%;\n    width: 25%;\n    padding: 5px;\n    @media (min-width: 1200px){\n        margin: 0px 20px;\n    }\n    @media (min-width: 1400px){\n        margin: 0px 30px;\n    }\n"]))),Ln=bn.a.button(Z||(Z=Object(v.a)(["\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    background: #e6dcd7;\n    padding: 10px 45px;\n"]))),Mn=Object(bn.a)(J.a)(ee||(ee=Object(v.a)(["\n    text-align: center;\n"]))),Hn=function(e){var n=e.cont1,t=e.cont2,i=e.cont3,a=e.desp1,c=e.desp2,s=e.desp3,o=e.secondc1,r=e.secondc2,d=e.secondc3,l=e.location,h=e.type,p=e.range;return Object(un.jsxs)(Sn,{children:[Object(un.jsxs)(An,{children:[Object(un.jsx)(Dn,{children:"Discover Your Own Future Empire Easy Cozy"}),Object(un.jsx)(Tn,{children:"Saving much time by finding match one using our algorithm that we designed"})]}),Object(un.jsxs)(Bn,{children:[Object(un.jsxs)("div",{children:[Object(un.jsx)(Rn,{children:n}),Object(un.jsx)(Vn,{children:a})]}),Object(un.jsxs)("div",{children:[Object(un.jsx)(Rn,{children:t}),Object(un.jsx)(Vn,{children:c})]}),Object(un.jsxs)("div",{children:[Object(un.jsx)(Rn,{children:i}),Object(un.jsx)(Vn,{children:s})]})]}),Object(un.jsxs)(Nn,{className:"ms-0 me-0 ps-0 pe-0",children:[Object(un.jsxs)(Fn,{children:[Object(un.jsx)(Mn,{xs:3,children:o}),Object(un.jsx)(Mn,{xs:3,children:r}),Object(un.jsx)(Mn,{xs:6,children:d})]}),Object(un.jsxs)(Fn,{children:[Object(un.jsx)("div",{children:Object(un.jsx)(Ln,{children:"Explore now"})}),Object(un.jsx)(Wn,{xs:2,children:l}),Object(un.jsx)(Wn,{xs:2,children:h}),Object(un.jsx)(Wn,{xs:2,children:p})]})]}),Object(un.jsx)(In,{src:"https://i.ibb.co/HBsCqbp/Children-COVID-Two.png",alt:"children-covid"})]})},Pn=t(206),qn=t(220),Kn=t(208),_n=t(204),Un=t(209),Xn=t(207),Gn=t(102),Yn=Object(bn.a)(_n.a)(ne||(ne=Object(v.a)(["\n    display: flex;\n    justify-content: flex-end;\n"]))),$n=bn.a.button(te||(te=Object(v.a)(["\n    background: black;\n    color: white;\n    padding: 9px;\n    border-radius: 10px;\n    margin-right: 10px;\n"]))),Qn=Object(Pn.a)({root:{maxWidth:"100%"},media:{height:140}}),Zn=Object(bn.a)(Xn.a)(ie||(ie=Object(v.a)(["\n    @media (min-width: 1200px){\n        height: 140px;\n    }\n    @media (min-width: 1600px){\n        height: 252px;\n    }\n"]))),et=function(){var e=Qn();return Object(un.jsxs)(qn.a,{className:e.root,style:{height:"100%"},children:[Object(un.jsx)(Gn.a,{className:e.title,color:"textPrimary",gutterBottom:!0,style:{fontSize:"24px",padding:"10px 20px",fontWeight:"700"},children:"Escuela Mariano Pic\xf3n Salas"}),Object(un.jsxs)(Kn.a,{children:[Object(un.jsx)(Zn,{image:"https://i.ibb.co/YT5Xpgr/financiera-1.jpg",title:"Contemplative Reptile"}),Object(un.jsxs)(Un.a,{children:[Object(un.jsx)(Gn.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),Object(un.jsx)(Gn.a,{variant:"body2",color:"textSecondary",component:"p",style:{fontSize:"18px"},children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(un.jsx)(Yn,{children:Object(un.jsx)(w.b,{to:"/school",children:Object(un.jsx)($n,{size:"small",children:"Read More"})})})]})},nt=t(134),tt=t(133),it=Object(bn.a)(k.a)(ae||(ae=Object(v.a)(["\n    height: 130px;\n    background-color: #000000;\n    padding: 20px 0px;\n    /* position: absolute;\n    bottom: 0px; */\n"]))),at=Object(bn.a)(C.a)(ce||(ce=Object(v.a)(["\n    font-size: 28px;\n    color: #ffffff;\n    font-weight: 700;\n    padding: 0px 20px 0px 150px;\n"]))),ct=Object(bn.a)(C.a)(se||(se=Object(v.a)(["\n    font-size: 16px;\n    padding: 0px 180px;\n    color: #ffffff;\n"]))),st=bn.a.div(oe||(oe=Object(v.a)(["\n    display: flex; \n    justify-content: center;\n    font-size: 18px;\n    font-weight: 700;\n"]))),ot=Object(bn.a)(J.a)(re||(re=Object(v.a)(["\n    color: #ffffff;\n    background-color: #000000;\n    padding-top: 30px;\n"]))),rt=bn.a.ul(de||(de=Object(v.a)(["\n    color: #ffffff;\n    font-size: 16px;\n    font-weight: 600;\n"]))),dt=function(){return Object(un.jsx)(it,{fluid:!0,children:Object(un.jsxs)(C.a,{children:[Object(un.jsxs)(J.a,{xs:6,children:[Object(un.jsx)(at,{children:"Information Blog of COVID-19"}),Object(un.jsx)(ct,{children:"Copyrights 2021. All Rights Reserved"})]}),Object(un.jsx)(ot,{xs:3,children:Object(un.jsxs)(st,{children:["Hecho con el ",Object(un.jsx)(On.b,{style:{margin:"0px 10px",fontSize:"30px"}}),"de:"]})}),Object(un.jsx)(J.a,{xs:3,children:Object(un.jsxs)(rt,{children:[Object(un.jsx)("li",{children:"Ysnaldo J. L\xf3pez H."}),Object(un.jsx)("li",{children:"Jos\xe9 F. Hern\xe1ndez A."}),Object(un.jsx)("li",{children:"Oscar E. Gandica P."})]})})]})})},lt=Object(bn.a)(k.a)(le||(le=Object(v.a)(["\n    display: flex;\n"]))),ht=Object(bn.a)(k.a)(he||(he=Object(v.a)(["\n    margin: 30px 30px 30px 140px;\n    display: flex;\n"]))),pt=bn.a.img(pe||(pe=Object(v.a)(["\n    width: 350px;\n    @media (min-width: 1200px){\n        height: 400px;\n    }\n    @media (min-width: 1400px){\n        height: 350px;       \n    }\n"]))),xt=bn.a.div(xe||(xe=Object(v.a)(["\n    @media (min-width: 1200px){\n        padding-top: 61px;\n    }\n    @media (min-width: 1400px){\n        padding-top: 50px;\n    }\n"]))),jt=bn.a.div(je||(je=Object(v.a)(["\n    width: 45%;\n    margin-left: 15px;\n"]))),bt=Object(bn.a)(z.a)(be||(be=Object(v.a)(["\n    height: 100%;\n    @media (min-width: 1200px){\n        width: 80%;\n    }\n    @media (min-width: 1400px){\n        width: 100%;\n    }\n    @media (min-width: 1600px){\n        width: 120%;\n    }\n"]))),ft=bn.a.div(fe||(fe=Object(v.a)(["\n    font-weight: 700;\n    @media (min-width: 1200px){\n        font-size: 28px;\n        line-height: 40px;\n\n    }\n    @media (min-width: 1400px){\n        font-size: 32px; \n        line-height: 50px;\n    }\n"]))),Ot=bn.a.div(Oe||(Oe=Object(v.a)(["\n    margin-top: 20px;\n    @media (min-width: 1200px){\n        font-size: 16px;\n    }\n    @media (min-width: 1400px){\n        font-size: 18px;\n    }\n\n"]))),ut=Object(bn.a)(C.a)(ue||(ue=Object(v.a)(["\n    padding: 0px 30px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    @media (min-width: 1200px){\n        top: 20px;\n    }\n    @media (min-width: 1400px){\n        top: 30px;\n    }\n"]))),gt=Object(bn.a)(J.a)(ge||(ge=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #ffffff;\n    margin-right: 10px;\n    @media (min-width: 1200px){\n        width: 42px;\n        height: 42px;\n    }\n    @media (min-width: 1400px){\n        width: 62px;\n        height: 62px;\n    }\n"]))),mt=Object(bn.a)(J.a)(me||(me=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #ffffff;\n    @media (min-width: 1200px){\n        width: 42px;\n        height: 42px;\n    }\n    @media (min-width: 1400px){\n        width: 62px;\n        height: 62px;\n    }\n"]))),wt=bn.a.img(we||(we=Object(v.a)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 90px;\n"]))),yt=Object(bn.a)(J.a)(ye||(ye=Object(v.a)(["\n    padding-right: 140px;\n    display: flex;\n    flex-direction: column;\n    background: #393E46;\n    padding-top: 30px;\n"]))),vt=bn.a.div(ve||(ve=Object(v.a)(["\n    margin-top: 30px;\n    display: flex; \n    justify-content: center;\n"]))),kt=bn.a.p(ke||(ke=Object(v.a)(["\n    margin-top: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    text-align: center;\n    color: #ffffff;\n"]))),zt=bn.a.p(ze||(ze=Object(v.a)(["\n    color: #949799;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 26px;\n    text-align: center;\n    padding: 0px 30px;\n"]))),Ct=bn.a.div(Ce||(Ce=Object(v.a)(["\n    border: 1px solid #ffffff;\n"]))),Jt=bn.a.div(Je||(Je=Object(v.a)(["\n    text-align: center;\n    color: #ffffff;\n    font-weight: 700;\n    margin-top: 30px;\n"]))),Et=bn.a.div(Ee||(Ee=Object(v.a)(["\n    display: flex; \n    justify-content: center;\n"]))),It=Object(bn.a)(E.a)(Ie||(Ie=Object(v.a)(["\n    padding: 10px 200px;\n    margin: 30px;\n"]))),St=function(){var e=Object(m.c)((function(e){return e.articles})).articles,n=Object(m.b)();return Object(un.jsxs)("div",{children:[Object(un.jsx)(En,{}),Object(un.jsx)(Hn,{cont1:"14,800",cont2:"640K",cont3:"99K",desp1:"House & Apartment",desp2:"Success Buyer",desp3:"Best Locations",secondc1:"Location",location:"Purbalingga",secondc2:"Type",type:"Apartment",secondc3:"Budget Range",range:"$8000 - $15000"}),Object(un.jsxs)(lt,{fluid:!0,className:"pe-0 ps-0",children:[Object(un.jsxs)(J.a,{xs:8,style:{background:"#393E46"},children:[void 0!==e&&e.map((function(e){return"one"===e.id||"two"===e.id||"three"===e.id?Object(un.jsxs)(ht,{fluid:!0,className:"pe-0 ps-0",children:[Object(un.jsx)("div",{children:Object(un.jsx)(pt,{src:"https://i.ibb.co/KGxd7CD/Children-COVID.png"})}),Object(un.jsx)(jt,{children:Object(un.jsx)(bt,{children:Object(un.jsxs)(z.a.Body,{children:[Object(un.jsxs)("div",{style:{display:"flex"},children:[Object(un.jsx)("p",{style:{marginRight:"20px"},children:"#COVID-19"}),Object(un.jsx)("p",{children:e.time})]}),Object(un.jsx)(ft,{children:e.title}),Object(un.jsx)(Ot,{children:e.content}),Object(un.jsx)(w.b,{to:"/details/".concat(e.id),children:Object(un.jsx)(E.a,{variant:"primary",onClick:function(){return function(e){n(jn(e.id,Object(d.a)({},e)))}(e)},style:{marginTop:"20px"},children:"Read More"})})]})})})]},e.id):null})),Object(un.jsx)(Et,{children:Object(un.jsx)(w.b,{to:"everyone",children:Object(un.jsx)(It,{variant:"primary",children:"Read More Articles"})})})]}),Object(un.jsxs)(yt,{children:[Object(un.jsxs)(Ct,{children:[Object(un.jsx)(vt,{children:Object(un.jsx)(wt,{src:"https://i.ibb.co/KGxd7CD/Children-COVID.png"})}),Object(un.jsx)(kt,{children:"Jaspreet Bhamrai"}),Object(un.jsx)(zt,{children:"For as long as I can remember I\u2019ve been obsessed with the idea of travel. I was always that person who was forever daydreaming of foreign lands and unfamiliar cultures; coming up with travel itineraries that would challenge my perceptions and help me gain a deeper understanding of the world."}),Object(un.jsx)(Jt,{children:"Follow me"}),Object(un.jsx)(k.a,{fluid:!0,className:"ps-0 pe-0",children:Object(un.jsxs)(ut,{children:[Object(un.jsx)(gt,{xs:3,className:"ps-0 pe-0",children:Object(un.jsx)(On.a,{style:{fontSize:"30px"}})}),Object(un.jsx)(gt,{xs:3,className:"ps-0 pe-0",children:Object(un.jsx)(On.e,{style:{fontSize:"30px"}})}),Object(un.jsx)(gt,{xs:3,className:"ps-0 pe-0",children:Object(un.jsx)(tt.a,{style:{fontSize:"30px"}})}),Object(un.jsx)(mt,{xs:3,className:"ps-0 pe-0",children:Object(un.jsx)(nt.a,{style:{fontSize:"30px"}})})]})})]}),Object(un.jsx)(xt,{children:Object(un.jsx)(et,{})})]})]}),Object(un.jsx)(dt,{})]})},At=bn.a.img(Se||(Se=Object(v.a)(["\n    width: 100vw;\n    height: 100vh;\n"]))),Bt=bn.a.div(Ae||(Ae=Object(v.a)(["\n    position: absolute;\n    height: 30vh;\n    top: 70vh;\n    background-color: #393E46;\n    width: 80%;\n"]))),Nt=bn.a.div(Be||(Be=Object(v.a)(["\n    display: flex;\n    position: absolute;\n    left: 140px;\n    top: 40px;\n"]))),Dt=Object(bn.a)(fn.b)(Ne||(Ne=Object(v.a)(["\n    border: none; \n    background: #6d6d6d;\n    padding: 20px;\n    border-radius: 500px;\n\n"]))),Tt=bn.a.p(De||(De=Object(v.a)(["\n    font-weight: 400;\n    font-size: 16px;\n    margin: 48px 50px 9px 50px;\n    color: #ffffff;\n"]))),Rt=bn.a.h1(Te||(Te=Object(v.a)(["\n    font-weight: 700px;\n    color: #ffffff;\n    font-weight: 700;\n    @media (min-width: 1200px){\n        line-height: 80px;\n        font-size: 40px;\n    }\n    @media (min-width: 1400px){\n        font-size: 32px;\n        line-height: 40px;\n    }\n    margin: 0px 50px 12px 50px;\n    @media (min-width: 1600px){\n        font-size: 44px;\n        line-height: 80px;\n    }\n"]))),Vt=bn.a.p(Re||(Re=Object(v.a)(["\n    font-size: 21px;\n    font-weight: 400;\n    line-height: 32px;\n    margin: 0px 50px 32px 50px;\n    color: #949799;\n"]))),Ft=bn.a.div(Ve||(Ve=Object(v.a)(["\n    display: inline-block;\n    background: #6d6d6d;\n    padding: 20px;\n    border-radius: 500px;\n    left: 80%;\n    position: relative;\n    bottom: 20px;\n"]))),Wt=Object(bn.a)(k.a)(Fe||(Fe=Object(v.a)(["\n    display: flex; \n    justify-content: center;\n    width: 80%;\n    flex-direction: column;\n    background-color: #393E46;\n    color: #ffffff;\n"]))),Lt=bn.a.img(We||(We=Object(v.a)(["\n    height: 500px;\n    margin: 0px 50px;\n"]))),Mt=Object(bn.a)(C.a)(Le||(Le=Object(v.a)(["\n    margin: 30px 100px;\n\n"]))),Ht=Object(bn.a)(J.a)(Me||(Me=Object(v.a)(["\n    font-size: 32px;\n"]))),Pt=bn.a.hr(He||(He=Object(v.a)(["\n    background: #DCE4E7;\n    margin: 0px 50px;\n    padding: 2px 0px;\n"]))),qt=function(){var e=Object(m.c)((function(e){return e.articlesActive}));return Object(un.jsxs)("div",{style:{background:"#393E46"},children:[Object(un.jsxs)("div",{className:"d-none d-sm-flex",style:{justifyContent:"center"},children:[Object(un.jsx)("a",{name:"menu",href:"!#",children:Object(un.jsx)(Nt,{children:Object(un.jsxs)(fn.a,{children:[Object(un.jsx)(Dt,{children:Object(un.jsx)(On.d,{style:{fontSize:"25px",color:"#ffffff"}})}),Object(un.jsxs)(fn.d,{children:[Object(un.jsx)(w.b,{to:"/articles",children:Object(un.jsx)(fn.c,{children:"Inicio"})}),Object(un.jsx)(w.b,{to:"weare",children:Object(un.jsx)(fn.c,{children:"Nosotros"})}),Object(un.jsx)(w.b,{to:"/everyone",children:Object(un.jsx)(fn.c,{children:"Ver mas Art\xedculos"})})]})]})})}),Object(un.jsx)(At,{src:"https://i.ibb.co/8cFg65C/coronavirus-4914026-1920.jpg",alt:"covid-image"}),Object(un.jsxs)(Bt,{children:[Object(un.jsx)(Tt,{children:"Travels"}),Object(un.jsx)(Rt,{children:e.active.title}),Object(un.jsx)(Vt,{children:"The good news for travelers is that there is no single best time of year to travel to Japan..."}),Object(un.jsx)(Pt,{})]})]}),Object(un.jsxs)(Wt,{fluid:!0,children:[Object(un.jsx)(Mt,{children:Object(un.jsx)(Ht,{xs:12,children:"The good news for travelers is that there is no single best time of year to travel to Japan \u2014 yet this makes it difficult to decide when to visit, as each of Japan\u2019s seasons has its own special highlights."})}),Object(un.jsx)(Mt,{children:Object(un.jsx)(J.a,{xs:12,children:"Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you\u2019ll see when you visit, each season \u2014 and even sub-season! \u2014 is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan. On the other hand, if your dates are flexible it\u2019s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold \u2014 or the heat and humidity of summer \u2014 while others will do whatever it takes to avoid crowds! (When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather, or fewer tourists around?) Because there is so much to consider, we\u2019ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more."})}),Object(un.jsx)(Lt,{src:"https://i.ibb.co/8cFg65C/coronavirus-4914026-1920.jpg",alt:"second-image"}),Object(un.jsx)(Mt,{children:Object(un.jsx)(J.a,{xs:12,children:"Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you\u2019ll see when you visit, each season \u2014 and even sub-season! \u2014 is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan. On the other hand, if your dates are flexible it\u2019s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold \u2014 or the heat and humidity of summer \u2014 while others will do whatever it takes to avoid crowds! (When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather, or fewer tourists around?) Because there is so much to consider, we\u2019ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more."})})]}),Object(un.jsx)(Ft,{children:Object(un.jsx)("a",{href:"#menu",children:Object(un.jsx)(On.c,{style:{color:"#ffffff",fontSize:"40px"}})})}),Object(un.jsx)(dt,{})]})},Kt=bn.a.p(Pe||(Pe=Object(v.a)(["\n        font-weight: 700;\n        font-size: 32px;\n        color: #ffffff;\n"]))),_t=Object(Pn.a)({root:{maxWidth:345},media:{height:140}}),Ut=bn.a.div(qe||(qe=Object(v.a)(["\n    display: flex;\n    position: absolute;\n    left: 140px;\n    top: 40px;\n"]))),Xt=Object(bn.a)(fn.b)(Ke||(Ke=Object(v.a)(["\n    border: none; \n    background: #6d6d6d;\n    padding: 20px;\n    border-radius: 500px;\n\n"]))),Gt=function(){var e=Object(m.b)(),n=_t(),t=Object(m.c)((function(e){return e.articles.articles}));return Object(un.jsxs)("div",{style:{background:"#393E46"},children:[Object(un.jsx)(k.a,{fluid:!0,style:{padding:"40px 140px 20px 140px"},children:Object(un.jsxs)(C.a,{children:[Object(un.jsx)(J.a,{xs:4,children:Object(un.jsx)(Ut,{children:Object(un.jsxs)(fn.a,{children:[Object(un.jsx)(Xt,{children:Object(un.jsx)(On.d,{style:{fontSize:"25px",color:"#ffffff"}})}),Object(un.jsxs)(fn.d,{children:[Object(un.jsx)(w.b,{to:"/articles",children:Object(un.jsx)(fn.c,{children:"Inicio"})}),Object(un.jsx)(w.b,{to:"/weare",children:Object(un.jsx)(fn.c,{children:"Nosotros"})})]})]})})}),Object(un.jsx)(J.a,{xs:8,children:Object(un.jsx)(Kt,{children:"Information Blog of COVID-19"})})]})}),Object(un.jsx)(k.a,{fluid:!0,style:{display:"flex",width:"80%",justifyContent:"center",marginBottom:"30px"},children:Object(un.jsx)(C.a,{children:void 0!==t&&t.map((function(t){return"school"!==t.id?Object(un.jsx)(J.a,{xs:4,style:{padding:"20px 10px",display:"flex",justifyContent:"center"},children:Object(un.jsxs)(qn.a,{className:n.root,children:[Object(un.jsxs)(Kn.a,{children:[Object(un.jsx)(Xn.a,{className:n.media,image:"https://i.ibb.co/DMdKmjs/Prueba-Presentacion.png",title:"Contemplative Reptile"}),Object(un.jsxs)(Un.a,{children:[Object(un.jsx)(Gn.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(un.jsx)(Gn.a,{variant:"body2",color:"textSecondary",component:"p",children:t.content.substring(0,80)})]})]}),Object(un.jsx)(w.b,{to:"/details/".concat(t.id),children:Object(un.jsx)(_n.a,{style:{marginLeft:"10px"},children:Object(un.jsx)(E.a,{variant:"primary",onClick:function(){return function(n){e(jn(n.id,Object(d.a)({},n)))}(t)},children:"Read More"})})})]},t.id)},t.id):null}))})}),Object(un.jsx)(dt,{})]})},Yt=bn.a.img(_e||(_e=Object(v.a)(["\n    width: 100vw;\n    height: 100vh;\n"]))),$t=bn.a.div(Ue||(Ue=Object(v.a)(["\n    position: absolute;\n    height: 30vh;\n    top: 70vh;\n    background-color: #393E46;\n    width: 80%;\n"]))),Qt=bn.a.div(Xe||(Xe=Object(v.a)(["\n    display: flex;\n    position: absolute;\n    left: 140px;\n    top: 40px;\n"]))),Zt=Object(bn.a)(fn.b)(Ge||(Ge=Object(v.a)(["\n    border: none; \n    background: #6d6d6d;\n    padding: 20px;\n    border-radius: 500px;\n\n"]))),ei=bn.a.p(Ye||(Ye=Object(v.a)(["\n    font-weight: 400;\n    font-size: 16px;\n    margin: 48px 50px 9px 50px;\n    color: #ffffff;\n"]))),ni=bn.a.h1($e||($e=Object(v.a)(["\n    font-weight: 700px;\n    color: #ffffff;\n    font-weight: 700;\n    @media (min-width: 1200px){\n        line-height: 80px;\n        font-size: 40px;\n    }\n    @media (min-width: 1400px){\n        font-size: 32px;\n        line-height: 40px;\n    }\n    margin: 0px 50px 12px 50px;\n    @media (min-width: 1600px){\n        font-size: 44px;\n        line-height: 80px;\n    }\n"]))),ti=bn.a.p(Qe||(Qe=Object(v.a)(["\n    font-size: 21px;\n    font-weight: 400;\n    line-height: 32px;\n    margin: 0px 50px 32px 50px;\n    color: #949799;\n"]))),ii=bn.a.div(Ze||(Ze=Object(v.a)(["\n    display: inline-block;\n    background: #6d6d6d;\n    padding: 20px;\n    border-radius: 500px;\n    left: 80%;\n    position: relative;\n    bottom: 20px;\n"]))),ai=Object(bn.a)(k.a)(en||(en=Object(v.a)(["\n    display: flex; \n    justify-content: center;\n    width: 80%;\n    flex-direction: column;\n    background-color: #393E46;\n    color: #ffffff;\n"]))),ci=bn.a.img(nn||(nn=Object(v.a)(["\n    height: 500px;\n    margin: 0px 50px;\n"]))),si=Object(bn.a)(C.a)(tn||(tn=Object(v.a)(["\n    margin: 30px 100px;\n\n"]))),oi=Object(bn.a)(J.a)(an||(an=Object(v.a)(["\n    font-size: 32px;\n"]))),ri=bn.a.hr(cn||(cn=Object(v.a)(["\n    background: #DCE4E7;\n    margin: 0px 50px;\n    padding: 2px 0px;\n"]))),di=function(){var e=Object(m.c)((function(e){return e.articles.articles}));return console.log(e),Object(un.jsxs)("div",{style:{background:"#393E46"},children:[Object(un.jsx)("a",{name:"menu",href:"!#",children:Object(un.jsxs)("div",{className:"d-none d-sm-flex",style:{justifyContent:"center"},children:[Object(un.jsx)(Qt,{children:Object(un.jsxs)(fn.a,{children:[Object(un.jsx)(Zt,{children:Object(un.jsx)(On.d,{style:{fontSize:"25px",color:"#ffffff"}})}),Object(un.jsxs)(fn.d,{children:[Object(un.jsx)(w.b,{to:"/articles",children:Object(un.jsx)(fn.c,{children:"Inicio"})}),Object(un.jsx)(w.b,{to:"/weare",children:Object(un.jsx)(fn.c,{children:"Nosotros"})}),Object(un.jsx)(w.b,{to:"/everyone",children:Object(un.jsx)(fn.c,{children:"Ver mas Art\xedculos"})})]})]})}),Object(un.jsx)(Yt,{src:"https://i.ibb.co/8cFg65C/coronavirus-4914026-1920.jpg",alt:"covid-image"}),Object(un.jsxs)($t,{children:[Object(un.jsx)(ei,{children:"Travels"}),Object(un.jsx)(ni,{children:void 0!==e&&e[3].title}),Object(un.jsx)(ti,{children:"The good news for travelers is that there is no single best time of year to travel to Japan..."}),Object(un.jsx)(ri,{})]})]})}),Object(un.jsxs)(ai,{fluid:!0,children:[Object(un.jsx)(si,{children:Object(un.jsx)(oi,{xs:12,children:"The good news for travelers is that there is no single best time of year to travel to Japan \u2014 yet this makes it difficult to decide when to visit, as each of Japan\u2019s seasons has its own special highlights."})}),Object(un.jsx)(si,{children:Object(un.jsx)(J.a,{xs:12,children:"Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you\u2019ll see when you visit, each season \u2014 and even sub-season! \u2014 is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan. On the other hand, if your dates are flexible it\u2019s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold \u2014 or the heat and humidity of summer \u2014 while others will do whatever it takes to avoid crowds! (When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather, or fewer tourists around?) Because there is so much to consider, we\u2019ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more."})}),Object(un.jsx)(ci,{src:"https://i.ibb.co/8cFg65C/coronavirus-4914026-1920.jpg",alt:"second-image"}),Object(un.jsx)(si,{children:Object(un.jsx)(J.a,{xs:12,children:"Japan is truly a year-round destination, and Japanese culture is remarkable in its profound appreciation of the changing of the seasons. As you\u2019ll see when you visit, each season \u2014 and even sub-season! \u2014 is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we typically recommend taking advantage of any chance to visit Japan. On the other hand, if your dates are flexible it\u2019s worth thinking about which time of year you might enjoy most. After all, some travelers hate the cold \u2014 or the heat and humidity of summer \u2014 while others will do whatever it takes to avoid crowds! (When planning a trip to Japan, a key question to ask yourself is: would you rather have better weather, or fewer tourists around?) Because there is so much to consider, we\u2019ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more."})})]}),Object(un.jsx)(ii,{children:Object(un.jsx)("a",{href:"#menu",children:Object(un.jsx)(On.c,{style:{color:"#ffffff",fontSize:"40px"}})})}),Object(un.jsx)(dt,{})]})},li=t(15),hi=t(9),pi=t(14),xi=t(210),ji=t(216),bi=t(219),fi=t(211),Oi=t(101),ui=t(136),gi=t.n(ui),mi=t(135),wi=Object(bn.a)(k.a)(sn||(sn=Object(v.a)(["\n    display: flex; \n    justify-content: center; \n    align-items: center;\n    height: 90vh;\n    padding-bottom: 10px;\n    background-color: #393E46;\n"]))),yi=bn.a.p(on||(on=Object(v.a)(["\n        font-weight: 700;\n        font-size: 32px;\n        color: #ffffff;\n"]))),vi=bn.a.div(rn||(rn=Object(v.a)(["\n    display: flex;\n    position: absolute;\n    left: 140px;\n    top: 40px;\n"]))),ki=Object(bn.a)(fn.b)(dn||(dn=Object(v.a)(["\n    border: none; \n    background: #6d6d6d;\n    padding: 20px;\n    border-radius: 500px;\n\n"]))),zi=Object(Pn.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Oi.a[500]}}})),Ci=function(){var e=zi(),n=a.a.useState(!1),t=Object(hi.a)(n,2),i=t[0],c=t[1],s=Object(m.c)((function(e){return e.infoWeare.weare})),o=function(){c(!i)};return Object(un.jsxs)("div",{style:{background:"#393E46",height:"100vh"},children:[Object(un.jsx)(k.a,{fluid:!0,style:{padding:"40px 140px 30px 140px"},children:Object(un.jsxs)(C.a,{children:[Object(un.jsx)(J.a,{xs:4,children:Object(un.jsx)(vi,{children:Object(un.jsxs)(fn.a,{children:[Object(un.jsx)(ki,{children:Object(un.jsx)(On.d,{style:{fontSize:"25px",color:"#ffffff"}})}),Object(un.jsxs)(fn.d,{children:[Object(un.jsx)(w.b,{to:"/articles",children:Object(un.jsx)(fn.c,{children:"Inicio"})}),Object(un.jsx)(w.b,{to:"/everyone",children:Object(un.jsx)(fn.c,{children:"Ver mas Art\xedculos"})})]})]})})}),Object(un.jsx)(J.a,{xs:8,children:Object(un.jsx)(yi,{children:"Information Blog of COVID-19"})})]})}),Object(un.jsx)(wi,{fluid:!0,children:void 0!==s&&s.map((function(n){return Object(un.jsxs)(qn.a,{className:e.root,style:{margin:"2% 2%"},children:[Object(un.jsx)(xi.a,{title:n.name}),Object(un.jsxs)(Un.a,{style:{padding:"0px 16px"},children:[Object(un.jsxs)(k.a,{fluid:!0,tyle:{display:"flex",justifyContent:"center"},children:[Object(un.jsx)(C.a,{children:Object(un.jsxs)(J.a,{xs:12,style:{margin:"10px 0px",height:"48px",color:"#949799"},children:[Object(un.jsx)("p",{children:n.profession}),Object(un.jsx)("p",{children:n.professiontwo})]})}),Object(un.jsx)(C.a,{children:Object(un.jsx)(J.a,{xs:12,style:{display:"flex",justifyContent:"center",marginBottom:"15px"},children:Object(un.jsx)(bi.a,{name:"Dan Abrahmov",src:"https://bit.ly/dan-abramov",style:{height:"100%",width:"80%"}})})})]}),Object(un.jsx)(Gn.a,{variant:"body2",color:"textSecondary",component:"p",children:n.description})]}),Object(un.jsxs)(_n.a,{disableSpacing:!0,children:[Object(un.jsxs)(fi.a,{"aria-label":"contact",style:{padding:"5px 10px",background:"#FAF8F7",boxShadow:"0px 4px 8px rgb(89 73 30 / 16%)",borderRadius:"0px",marginLeft:"5px"},children:[Object(un.jsx)(mi.a,{}),Object(un.jsx)("div",{style:{fontSize:"18px",margin:"5px"},children:"Contactar"})]}),Object(un.jsx)(fi.a,{className:Object(pi.a)(e.expand,Object(li.a)({},e.expandOpen,i)),onClick:o,"aria-expanded":i,"aria-label":"show more",children:Object(un.jsx)(gi.a,{})})]}),Object(un.jsx)(ji.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(un.jsxs)(Un.a,{children:[Object(un.jsx)(Gn.a,{paragraph:!0,children:"Method:"}),Object(un.jsx)(Gn.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(un.jsx)(Gn.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(un.jsx)(Gn.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(un.jsx)(Gn.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]},n.id)}))}),Object(un.jsx)(dt,{})]})},Ji=function(){return Object(un.jsx)(w.a,{children:Object(un.jsxs)(y.d,{children:[Object(un.jsx)(y.b,{exact:!0,path:"/articles",component:St}),Object(un.jsx)(y.b,{path:"/details/:article",component:qt}),Object(un.jsx)(y.b,{exact:!0,path:"/everyone",component:Gt}),Object(un.jsx)(y.b,{exact:!0,path:"/school",component:di}),Object(un.jsx)(y.b,{exact:!0,path:"/weare",component:Ci}),Object(un.jsx)(y.a,{to:"/articles"})]})})},Ei=t(214),Ii=function(){var e=Object(A.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln.collection("/weare/").get();case 2:return n=e.sent,t=[],n.forEach((function(e){t.push(Object(d.a)({id:e.id},e.data()))})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Si=function(e){return{type:p,payload:e}};var Ai=function(){var e=Object(m.b)();return Object(i.useEffect)((function(){e(function(){var e=Object(A.a)(S.a.mark((function e(n){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pn();case 2:t=e.sent,n(xn(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e(function(){var e=Object(A.a)(S.a.mark((function e(n){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ii();case 2:t=e.sent,n(Si(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]),Object(un.jsx)(Ei.a,{children:Object(un.jsx)(Ji,{})})};t(168);s.a.render(Object(un.jsx)(m.a,{store:g,children:Object(un.jsx)(Ai,{})}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.15077ce6.chunk.js.map