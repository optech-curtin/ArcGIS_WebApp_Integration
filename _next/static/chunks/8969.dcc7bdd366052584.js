"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8969],{48969:(e,t,i)=>{i.r(t),i.d(t,{OperatorGeodesicBuffer:()=>G});var s=i(8288),n=i(16404),r=i(73750),m=i(40224),a=i(81856),o=i(32045),h=i(31632),l=i(26251),u=i(92656),_=i(23750),c=i(64601),f=i(99506);class d{constructor(e){this.m_sr=null,this.m_gcs=null,this.m_transform=null,this.m_a=0,this.m_eSquared=0,this.m_rpu=0,this.m_radTolerance=0,this.m_q90=0,this.m_gcs90=0,this.m_gcs180=0,this.m_gcs360=0,this.m_gcs60=0,this.m_ellipticToGeodesicMaxRatio=0,this.m_curveType=0,this.m_bShapePreserving=!1,this.m_distance=0,this.m_absDistance=0,this.m_convergenceOffset=0,this.m_cornerStep=0,this.m_segmentStep=0,this.m_progressTracker=e}bufferPolygon(e){let t=new I(this,e,new o.a);return this.processGnomonicBufferPiecesCursor(!0,t)}bufferPolyline(e){let t=new I(this,e,null);return this.processGnomonicBufferPiecesCursor(!0,t)}bufferMultiPoint(e){let t=new E(this,e);return this.processGnomonicBufferPiecesCursor(!1,t)}bufferPoint(e){let t=e.getXY();t.scale(this.m_rpu);let i=new o.a;if(this.bufferPoint2D(t,!1,i)){let e=(0,h.b)(null,i,!0);i=(0,m.y)(i,e,!0,!0,-1,this.m_progressTracker,0,!1)}return(new m.v).foldInto360RangeGeodetic(i,this.m_gcs,2)}processGnomonicBufferPiecesCursor(e,t){let i,s,n,a=t.getGnomonic(),o=(0,m.z)((0,m.A)()),_=new m.L,c=(new m.h).executeMany(_,o,this.m_progressTracker,2),f=(0,u.d)(6,!1),d=(0,u.m)(r.J,6);this.initializeGrid(f,d);let g=[null,null,null,null,null,null],P=[null,null,null,null,null,null],p=[null,null,null,null,null,null];for(;null!==(i=t.next());){if((s=t.getGnomonic())!==a){if(null!==a){let t=c.next();if(_=null,c=null,null!=t){let i=(0,h.b)(o,t,!0),s=(0,h.d)(i);t=a.unproject(t,s,this.m_progressTracker),this.putInGridCursors(e,t,o,!0,f,d,g,P,p)}}null!==s&&(_=new m.L,c=(new m.h).executeMany(_,o,this.m_progressTracker,2)),a=s}if(t.isRunningInGnomonic()){if(s.project(i),t.needsSimplify()){let e=(0,h.b)(null,i,!0);i=(0,m.y)(i,e,!0,!0,-1,this.m_progressTracker,0,!1)}_.tick(v(i)),c.tock()}else this.putInGridCursors(e,i,o,!0,f,d,g,P,p)}let b=!1;for(let e=0;e<6;e++)if(null!=p[e]){b=!0;break}if(b){let i=!1,s=[null,null,null,null,null,null];if(e){let n=t.m_densified;if(t.m_densified=null,null!==n){let t=new l.T;t.scale(1/this.m_rpu,1/this.m_rpu),n.applyTransformation(t),this.m_distance>0?this.putInGridCursors(e,n,o,!1,f,d,g,P,p):(this.processInGrid(e,n,!1,f,d,g,s),i=!0)}}let r=new m.L,u=(new m.h).executeMany(r,this.m_gcs,this.m_progressTracker,2);if(null!==c){let t=c.next();_=null,c=null;let i=(0,h.b)(o,t,!0),s=(0,h.d)(i);t=a.unproject(t,s,this.m_progressTracker),this.putInGridCursors(e,t,o,!0,f,d,g,P,p)}for(let e=0;e<6;e++)if(null!=p[e]){let t=p[e].next();p[e]=null,P[e]=null,i&&null!==s[e]&&(t=(new m.e).execute(s[e],t,o,this.m_progressTracker));let n=(0,h.b)(o,t,!0),a=(0,h.d)(n);t=g[e].unproject(t,a,this.m_progressTracker),t=(new m.g).execute(t,this.m_gcs,!0,this.m_progressTracker),r.tick(v(t)),u.tock()}n=u.next()}else{let i,r=!1;if(e){let e=t.m_densified;if(t.m_densified=null,null!==e){let t=new l.T;t.scale(1/this.m_rpu,1/this.m_rpu),e.applyTransformation(t),s.project(e);let n=(0,h.b)(null,e,!0);e=(0,m.y)(e,n,!1,!0,-1,this.m_progressTracker,0,!1),this.m_distance>0?(_.tick(v(e)),c.tock()):(i=e,r=!0)}}let u=c.next();_=null,c=null,r&&(u=(new m.e).execute(i,u,o,this.m_progressTracker));let f=(0,h.b)(o,u,!0),d=(0,h.d)(f);n=a.unproject(u,d,this.m_progressTracker),n=(new m.g).execute(n,this.m_gcs,!0,this.m_progressTracker)}return(new m.v).foldInto360RangeGeodetic(n,this.m_gcs,2)}putInGridCursors(e,t,i,s,n,r,a,o,h){let l=[null,null,null,null,null,null];this.processInGrid(e,t,s,n,r,a,l);for(let e=0;e<6;e++)null!==l[e]&&(null===o[e]&&(o[e]=new m.L,h[e]=(new m.h).executeMany(o[e],i,this.m_progressTracker,2)),o[e].tick(v(l[e])),h[e].tock())}processInGrid(e,t,i,s,n,r,a){let o=this.insertGeodeticPointsAlongGrid(t,n,.01);for(let e=0;e<6;e++){if(s[e])continue;let l=n[e].clone();l.inflateCoords(.01,.01);let c=(0,h.e)(t,l),f=(0,h.a)(null,c,!1).total(),d=(0,_.c)(o,l,f,Number.NaN,this.m_progressTracker);if(null!==d&&!d.isEmpty()){if(d===o&&(d=d.clone()),null===r[e]){let t=new u.P;e<3?t.setCoords(0,1):t.setCoords(0,-1);let i=new u.P;i.setAdd(n[e].getCenter(),t),r[e]=S(this.m_gcs,i)}r[e].project(d);let t=(0,h.b)(null,d,!0);d=(0,m.y)(d,t,i,!0,-1,this.m_progressTracker,0,!1),a[e]=d}}}insertGeodeticPointsAlongGrid(e,t,i){let s=r.J.construct(t[3].xmin,t[3].ymin,t[2].xmax,t[2].ymax),n=(0,m.B)(this.m_gcs,s,e,!0,this.m_progressTracker),a=new o.E,h=a.addGeometry(n);return(0,m.D)(a,h,this.m_gcs,0,2,!0,t[0].xmax+i),(0,m.D)(a,h,this.m_gcs,0,2,!0,t[1].xmax+i),(0,m.D)(a,h,this.m_gcs,0,2,!1,t[1].ymin+i),0!==i&&((0,m.D)(a,h,this.m_gcs,0,2,!0,t[0].xmax-i),(0,m.D)(a,h,this.m_gcs,0,2,!0,t[1].xmax-i),(0,m.D)(a,h,this.m_gcs,0,2,!1,t[1].ymin-i)),a.getGeometry(h)}initializeGrid(e,t){for(let t=0;t<6;t++)e[t]=!1;t[0].setCoords({xmin:-this.m_gcs180,ymin:0,xmax:-this.m_gcs60,ymax:this.m_gcs90}),t[1].setCoords({xmin:-this.m_gcs60,ymin:0,xmax:this.m_gcs60,ymax:this.m_gcs90}),t[2].setCoords({xmin:this.m_gcs60,ymin:0,xmax:this.m_gcs180,ymax:this.m_gcs90}),t[3].setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:-this.m_gcs60,ymax:0}),t[4].setCoords({xmin:-this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs60,ymax:0}),t[5].setCoords({xmin:this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:0})}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e,t,i,s,n,r){let a=e[0],o=e.at(-1),h=a.y<o.y?a.y:o.y,l=a.y>o.y?a.y:o.y,_=m.t.q(this.m_a,this.m_eSquared,h),c=m.t.q(this.m_a,this.m_eSquared,l);if(this.m_q90-(_+t+this.m_absDistance)>.001&&this.m_q90+(c-t-this.m_absDistance)>.001)return!1;let f=i-u.l,d=s+u.l,g=f-Math.PI,x=f+Math.PI,y=d+Math.PI,w=[Number.NaN],C=[Number.NaN],S=[Number.NaN],v=[Number.NaN],D=!1;if(b(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,a,f,g,o,d,w,C),b(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,o,y,d,a,g,S,v),(d<w[0]&&w[0]<y||d<C[0]&&C[0]<y)&&(D=!0),D||(g<S[0]&&S[0]<f||g<v[0]&&v[0]<f)&&(D=!0),!D&&n)return!1;let I=[];for(let t=e.length-1;t>=0;t--)I.push(e[t]);r.setEmpty(),r.addPathPoint2D(null,0,!0);let E=0;E=P(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,e,f,d,n,E,r),E=p(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,o,d,y,this.m_cornerStep,n,E,r,w[0],C[0]),E=P(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,I,y,x,n,E,r),E=p(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,a,g,f,this.m_cornerStep,n,E,r,S[0],v[0]);let G=!1;return n||(G=this.checkAndPrepForPole(r)),D||G}bufferPoint2D(e,t,i){i.setEmpty(),i.addPathPoint2D(null,0,!0),p(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,e,-this.m_cornerStep,2*Math.PI,this.m_cornerStep,t,0,i);let s=!1;return t||(s=this.checkAndPrepForPole(i)),s}checkAndPrepForPole(e){let t=this.checkAndPrepForPoleTouch(e),i=this.checkAndPrepForPoleWrap(e);return t||i}checkAndPrepForPoleTouch(e){let t=new r.J;return e.queryEnvelope(t),!(!(0,m.P)(t.ymax,this.m_gcs90)&&!(0,m.P)(t.ymin,-this.m_gcs90))&&(this.prepPoleTouch(e),!0)}checkAndPrepForPoleWrap(e){let t=e.getXY(0),i=e.getXY(e.getPointCount()-1);return Math.abs(t.x-i.x)>this.m_gcs180?(this.prepSinglePoleWrap(e),!0):this.checkAndPrepForDoublePoleWrap(e)}checkAndPrepForDoublePoleWrap(e){return 0>e.calculateArea2D()&&(this.prepDoublePoleWrap(e),!0)}prepPoleTouch(e){let t=new o.a;t.insertPath2D(-1,null,0,0,!0);let i=e.getPathStart(0),s=e.getPathEnd(0),n=s-i,r=-1;for(r=i;r<s;r++){let t=e.getXY(r),i=(0,m.P)(t.y,this.m_gcs90),s=(0,m.P)(t.y,-this.m_gcs90);if(!i&&!s)break}let a=r,h=!1,l=Number.NaN;do{let s=e.getXY(a),r=(0,m.P)(s.y,this.m_gcs90),o=(0,m.P)(s.y,-this.m_gcs90),_=i+(a+1-i)%n;if(r||o){let i=u.P.construct(l,s.y);t.insertPoint2D(0,-1,i);let n=e.getXY(_),r=(0,m.P)(n.y,this.m_gcs90),a=(0,m.P)(n.y,-this.m_gcs90);r||a||(i=u.P.construct(n.x,s.y),h?t.setXY(t.getPointCount()-1,i):t.insertPoint2D(0,-1,i)),h=!0}else t.insertPoint2D(0,-1,s),l=s.x,h=!1;a=_}while(a!==r);e.setEmpty(),e.add(t,!1)}prepSinglePoleWrap(e){let t,i,s=new o.a,n=new o.a,a=new l.T,c=e.getXY(e.getPathStart(0)),f=e.getXY(e.getPathEnd(0)-1),d=this.m_gcs360,g=this.m_gcs180,P=new r.J;P.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});let p=new r.J;e.queryEnvelope(p);let b=Math.ceil(p.width()/d);c.x>f.x?(t=-d,i=this.m_gcs90):(t=d,i=-this.m_gcs90),a.setShiftCoords(t,0),s.addPath(e,0,!0),n.add(s,!1);let x=new h.P;for(let e=0;e<b;e++)n.applyTransformation(a),n.getPointByVal(0,x),s.lineToPoint(x),s.addSegmentsFromPath(n,0,0,n.getSegmentCount()-1,!1);let y=s.getXY(0),w=s.getXY(s.getPointCount()-1);y.y=i,w.y=i,s.lineTo(w);let C=new u.P;for(C.setCoordsPoint2D(w),C.x-=.5*t;Math.abs(C.x-y.x)>g;)s.lineTo(C),C.x-=.5*t;s.lineTo(y);let S=P.getCenterX(),v=new r.J;s.queryEnvelope(v);let D=0,I=v.getCenter().x;I-S>g?D=-Math.ceil((I-S-g)/d):S-I>g&&(D=Math.ceil((S-I-g)/d)),0!==D&&(a.setShiftCoords(D*d,0),s.applyTransformation(a));let E=new o.E,G=E.addGeometry(s);(0,m.D)(E,G,this.m_gcs,0,2,!0,P.xmin),(0,m.D)(E,G,this.m_gcs,0,2,!0,P.xmax);let k=E.getGeometry(G),T=(0,h.e)(k,P);T.inflateCoords(0,1);let M=(0,h.a)(null,T,!0).total(),N=(0,_.c)(k,P,M,Number.NaN,this.m_progressTracker);e.setEmpty(),e.add(N,!1)}prepDoublePoleWrap(e){let t=this.m_gcs360,i=this.m_gcs180,s=new r.J;s.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});let n=s.getCenter().x,a=new r.J;e.queryPathEnvelope(0,a);let c,f=0,d=a.getCenter().x;if(d-n>i?f=-Math.ceil((d-n-i)/t):n-d>i&&(f=Math.ceil((n-d-i)/t)),0!==f){let i=new l.T;i.setShiftCoords(f*t,0),e.getImpl().applyTransformationToPath(i,0),e.queryPathEnvelope(0,a),d=a.getCenter().x}let g=new r.J;s.containsExclusiveEnvelope(a)?(c=!1,g.setCoords({env2D:s})):(c=!0,g.setCoords({env2D:s}),g.xmin-=t,g.xmax+=t);let P=e.createInstance();P.addPathPoint2D(null,0,!0);let p=new u.P;if(p.setCoords(g.xmin,g.ymin),P.insertPoint2D(0,-1,p),p.setCoords(g.xmin,g.ymax),P.insertPoint2D(0,-1,p),p.setCoords(.5*(g.xmin+g.xmax),g.ymax),P.insertPoint2D(0,-1,p),p.setCoords(g.xmax,g.ymax),P.insertPoint2D(0,-1,p),p.setCoords(g.xmax,g.ymin),P.insertPoint2D(0,-1,p),p.setCoords(.5*(g.xmin+g.xmax),g.ymin),P.insertPoint2D(0,-1,p),c){P.addPath(e,0,!0);let i=new l.T;d<n?i.setShiftCoords(t,0):i.setShiftCoords(-t,0),e.getImpl().applyTransformationToPath(i,0),P.addPath(e,0,!0);let r=new o.E,a=r.addGeometry(P);(0,m.D)(r,a,this.m_gcs,0,2,!0,s.xmin),(0,m.D)(r,a,this.m_gcs,0,2,!0,s.xmax),P=r.getGeometry(a);let u=(0,h.e)(P,s);u.inflateCoords(0,1);let c=(0,h.a)(null,u,!0).total();P=(0,_.c)(P,s,c,Number.NaN,this.m_progressTracker)}else P.addPath(e,0,!0);e.setEmpty(),e.add(P,!1)}setMinCornerStep(){let e={stack:[],error:void 0,hasError:!1};try{let t=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);t=Math.min(t,.125*this.m_a*Math.PI);let i=new u.P;i.setCoords(0,10*this.m_rpu);let s=45*this.m_rpu,n=(0,a.b)(e,new u.S(new m.E,new m.E),!1),r=(0,a.b)(e,new u.S(new m.E,new m.E),!1),o=(0,a.b)(e,new u.S(new m.E,new m.E),!1),h=(0,a.b)(e,new u.S(new m.E,new m.E),!1),l=new u.P,_=new u.P,c=new u.P,f=new u.P;for(m.F.geodesicCoordinate(this.m_a,this.m_eSquared,i.x,i.y,t,0,n.at(0),n.at(1)),l.setCoords(n.at(0).val,n.at(1).val),m.F.geodesicCoordinate(this.m_a,this.m_eSquared,i.x,i.y,t,s,r.at(0),r.at(1)),_.setCoords(r.at(0).val,r.at(1).val);;){let e={stack:[],error:void 0,hasError:!1};try{let n=.5*(0+s);m.F.geodesicCoordinate(this.m_a,this.m_eSquared,i.x,i.y,t,n,o.at(0),o.at(1)),c.setCoords(o.at(0).val,o.at(1).val);let u=(0,a.b)(e,new m.E,!1),d=(0,a.b)(e,new m.E,!1);m.F.geodeticDistance(this.m_a,this.m_eSquared,l.x,l.y,_.x,_.y,u,d,null,2),m.F.geodeticCoordinate(this.m_a,this.m_eSquared,l.x,l.y,.5*u.val,d.val,h.at(0),h.at(1),2),f.setCoords(h.at(0).val,h.at(1).val);let g=(0,a.b)(e,new m.E,!1);if(m.F.geodeticDistance(this.m_a,this.m_eSquared,c.x,c.y,f.x,f.y,g,null,null,2),g.val<=this.m_convergenceOffset)break;s*=.9,m.F.geodesicCoordinate(this.m_a,this.m_eSquared,i.x,i.y,t,s,r.at(0),r.at(1)),_.setCoords(r.at(0).val,r.at(1).val)}catch(t){e.error=t,e.hasError=!0}finally{(0,a.c)(e)}}let d=s-0,g=2*Math.PI/Math.ceil(2*Math.PI/d);this.m_cornerStep=g}catch(t){e.error=t,e.hasError=!0}finally{(0,a.c)(e)}}setMinSegmentStep(){let e={stack:[],error:void 0,hasError:!1};try{let t=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);t=Math.min(t,.125*this.m_a*Math.PI);let i=new u.P,s=new u.P;i.setCoords(0,10*this.m_rpu),s.setCoords(10*this.m_rpu,10*this.m_rpu);let n=(0,a.b)(e,new m.E,!1),r=(0,a.b)(e,new m.E,!1),o=(0,a.b)(e,new m.E,!1);m.F.geodeticDistance(this.m_a,this.m_eSquared,i.x,i.y,s.x,s.y,o,n,r,this.m_curveType);let h=(0,a.b)(e,new u.S(new m.E,new m.E),!1),l=(0,a.b)(e,new u.S(new m.E,new m.E),!1),_=new u.P,c=(0,a.b)(e,new m.E,!1),f=(0,a.b)(e,new u.S(new m.E,new m.E),!1),d=(0,a.b)(e,new u.S(new m.E,new m.E),!1),g=(0,a.b)(e,new u.S(new m.E,new m.E),!1),P=(0,a.b)(e,new u.S(new m.E,new m.E),!1),p=new u.P,b=new u.P,x=new u.P,y=new u.P,w=1,C=n.val,S=r.val,v=C-.5*Math.PI,D=S+.5*Math.PI,I=o.val;for(m.F.geodesicCoordinate(this.m_a,this.m_eSquared,i.x,i.y,t,v,f.at(0),f.at(1)),p.setCoords(f.at(0).val,f.at(1).val),m.F.geodesicCoordinate(this.m_a,this.m_eSquared,s.x,s.y,t,D,d.at(0),d.at(1)),b.setCoords(d.at(0).val,d.at(1).val);;){let e={stack:[],error:void 0,hasError:!1};try{let n=.5*(0+w);m.F.geodeticCoordinate(this.m_a,this.m_eSquared,i.x,i.y,n*I,C,h.at(0),h.at(1),this.m_curveType),_.setCoords(h.at(0).val,h.at(1).val),m.F.geodeticDistance(this.m_a,this.m_eSquared,i.x,i.y,_.x,_.y,null,null,c,this.m_curveType);let r=c.val+.5*Math.PI;m.F.geodesicCoordinate(this.m_a,this.m_eSquared,_.x,_.y,t,r,g.at(0),g.at(1)),x.setCoords(g.at(0).val,g.at(1).val);let o=(0,a.b)(e,new m.E,!1),u=(0,a.b)(e,new m.E,!1);m.F.geodeticDistance(this.m_a,this.m_eSquared,p.x,p.y,b.x,b.y,o,u,null,2),m.F.geodeticCoordinate(this.m_a,this.m_eSquared,p.x,p.y,.5*o.val,u.val,P.at(0),P.at(1),2),y.setCoords(P.at(0).val,P.at(1).val);let f=(0,a.b)(e,new m.E,!1);if(m.F.geodeticDistance(this.m_a,this.m_eSquared,x.x,x.y,y.x,y.y,f,null,null,2),f.val<=this.m_convergenceOffset)break;{let e={stack:[],error:void 0,hasError:!1};try{w*=.9,m.F.geodeticCoordinate(this.m_a,this.m_eSquared,i.x,i.y,w*I,C,l.at(0),l.at(1),this.m_curveType),s.setCoords(l.at(0).val,l.at(1).val);let n=(0,a.b)(e,new m.E,!1);m.F.geodeticDistance(this.m_a,this.m_eSquared,i.x,i.y,s.x,s.y,null,null,n,this.m_curveType);let r=n.val+.5*Math.PI;m.F.geodesicCoordinate(this.m_a,this.m_eSquared,s.x,s.y,t,r,d.at(0),d.at(1)),b.setCoords(d.at(0).val,d.at(1).val)}catch(t){e.error=t,e.hasError=!0}finally{(0,a.c)(e)}}}catch(t){e.error=t,e.hasError=!0}finally{(0,a.c)(e)}}let E=w*I;E>1e5&&(E=1e5),this.m_segmentStep=E}catch(t){e.error=t,e.hasError=!0}finally{(0,a.c)(e)}}setConvergenceOffset(){let e;e=this.m_absDistance>5e4?100:this.m_absDistance>1e4?10:1,this.m_absDistance/e<500&&(e=this.m_absDistance/500),e<.01&&(e=.01),this.m_convergenceOffset=e}}function g(e,t,i,s,a,l,_){if(e.isEmpty())return new o.a({vd:e.getDescription()});let c=e;if((0,n.j)(c)){let e=10*t.getTolerance(0);c=(new f.O).execute(c,0,e,0,_,12e3)}let g=new d(_);g.m_sr=t,g.m_gcs=t.getGCS(),g.m_transform=(0,m.p)(t,g.m_gcs,null);let P=(0,m.G)();g.m_gcs.querySpheroidData(P);let p=new r.J;c.queryEnvelope(p),g.m_a=P.majorSemiAxis,g.m_eSquared=P.e2,g.m_rpu=g.m_gcs.getUnit().getUnitToBaseFactor(),g.m_gcs90=.5*Math.PI/g.m_rpu,g.m_gcs180=Math.PI/g.m_rpu,g.m_gcs360=2*Math.PI/g.m_rpu,g.m_gcs60=g.m_gcs360/6,g.m_q90=m.t.q90(g.m_a,g.m_eSquared),g.m_ellipticToGeodesicMaxRatio=.5*g.m_a*Math.PI/g.m_q90;let b=g.m_gcs.getTolerance(0);g.m_radTolerance=b*g.m_rpu,4===i?(g.m_curveType=2,g.m_bShapePreserving=!0):(g.m_curveType=i,g.m_bShapePreserving=!1),g.m_distance=s,g.m_absDistance=Math.abs(s),Number.isNaN(a)||a<=0?g.setConvergenceOffset():g.m_convergenceOffset=Math.max(a,.001),g.m_convergenceOffset/=l;let x,y=c.getGeometryType();if((0,n.f)(y)){let e=new o.P({vd:c.getDescription()});e.addSegment(c,!0),x=e,y=n.G.enumPolyline}else if(y===n.G.enumEnvelope){let e=c,t=new r.J;e.queryEnvelope(t);let i=(0,h.d)((0,h.a)(g.m_sr,p,!0));if(t.minDimension()<=i)if(0===t.maxDimension()){let t=new h.P({vd:c.getDescription()});e.getCenter(t),x=t,y=n.G.enumPoint}else{let t=new o.P({vd:c.getDescription()});t.addEnvelope(e,!1),x=t,y=n.G.enumPolyline}else{let t=new o.a({vd:c.getDescription()});t.addEnvelope(e,!1),x=t,y=n.G.enumPolygon}}else x=c;if(g.setMinCornerStep(),(0,n.e)(y)||g.setMinSegmentStep(),g.m_absDistance<=.5*g.m_convergenceOffset)return y!==n.G.enumPolygon?new o.a({vd:x.getDescription()}):g.m_bShapePreserving?x:(0,m.u)(x,g.m_sr,g.m_curveType,g.m_segmentStep,-1,_);if(g.m_distance<0&&y!==n.G.enumPolygon)return new o.a({vd:x.getDescription()});if(g.m_bShapePreserving&&(0,n.h)(y)){let e=(0,m.u)(x,t,4,Number.NaN,g.m_convergenceOffset,_);x=(new m.v).execute(e,g.m_transform,_)}else x=(new m.v).execute(x,g.m_transform,_);if((x=(0,m.w)(x,g.m_gcs)).isEmpty())return new o.a({vd:x.getDescription()});!g.m_bShapePreserving&&(0,n.h)(y)&&(x=(0,m.x)(g.m_rpu,x)),x=function(e,t){let i,s=e.getGeometryType();if(1===(i=(0,n.h)(s)?e.getPathCount():s===n.G.enumMultiPoint?e.getPointCount():1))return e;let m=[],a=[];for(let o=0;o<i;o++){m.push(o);let i=new u.P;if((0,n.h)(s)){let t=new r.J;e.queryPathEnvelope(o,t),i.assign(t.getCenter())}else i.assign(e.getXY(o));let h=t.toGeohash(i);a.push(h)}m.sort((e,t)=>a[e]<a[t]?-1:+(a[e]>a[t]));let o=e.createInstance();for(let t=0;t<i;t++){let i=m[t];(0,n.h)(s)?o.addPath(e,i,!0):o.addPoints(e,i,i+1)}return o}(x,g.m_gcs);let w=new o.a;switch(y){case n.G.enumPolygon:w=g.bufferPolygon(x);break;case n.G.enumPolyline:w=g.bufferPolyline(x);break;case n.G.enumMultiPoint:w=g.bufferMultiPoint(x);break;case n.G.enumPoint:w=g.bufferPoint(x);break;default:(0,n.k)("")}let C=(new m.v).execute(w,g.m_transform.getInverse(),_);return C.mergeVertexDescription(x.getDescription()),C}function P(e,t,i,s,n,r,o,h,l,_,c){let f={stack:[],error:void 0,hasError:!1};try{let d=new u.P;d.setNAN(),l||c.getPointCount()>0&&(d.setCoordsPoint2D(c.getXY(c.getPointCount()-1)),d.scale(i));let g=(0,a.b)(f,new m.E,!1),P=(0,a.b)(f,new u.S(new m.E,new m.E),!1),p=new u.P,b=new u.P,y=r.at(-1),w=1/i;for(let i=0;i<r.length;i++){let a,u=r[i];0===i?a=o:i===r.length-1?a=h:(m.F.geodeticDistance(e,t,y.x,y.y,u.x,u.y,null,null,g,n),a=g.val-.5*Math.PI),m.F.geodesicCoordinate(e,t,u.x,u.y,s,a,P.at(0),P.at(1)),l?b.setCoords(P.at(0).val,P.at(1).val):(p.setCoords(P.at(0).val,P.at(1).val),_=x(u.x,p.x,d.x,_),b.setCoords(_+p.x,p.y),d.setCoordsPoint2D(b)),b.scale(w),c.insertPoint2D(0,-1,b)}return _}catch(e){f.error=e,f.hasError=!0}finally{(0,a.c)(f)}}function p(e,t,i,s,n,r,o,h,l,_,c,f=Number.NaN,d=Number.NaN){let g={stack:[],error:void 0,hasError:!1};try{if(o-r<h)return _;let P=(0,a.b)(g,new u.S(new m.E,new m.E),!1),p=new u.P,b=new u.P,y=new u.P;b.setNAN(),l||c.getPointCount()>0&&(b.setCoordsPoint2D(c.getXY(c.getPointCount()-1)),b.scale(i));let w=Math.ceil(r/h),C=w++*h;C===r&&(C=w++*h);let S=r,v=1/i;for(;C<o+h&&(S<f&&f<C?(C=f,w--):S<d&&d<C&&(C=d,w--),!(C>=o));)m.F.geodesicCoordinate(e,t,n.x,n.y,s,C,P.at(0),P.at(1)),l?y.setCoords(P.at(0).val,P.at(1).val):(p.setCoords(P.at(0).val,P.at(1).val),_=x(n.x,p.x,b.x,_),y.setCoords(_+p.x,p.y),b.setCoordsPoint2D(y)),y.scale(v),c.insertPoint2D(0,-1,y),S=C,C=w++*h;return _}catch(e){g.error=e,g.hasError=!0}finally{(0,a.c)(g)}}function b(e,t,i,s,n,r,o,h,l,_,c){let f={stack:[],error:void 0,hasError:!1};try{let i=new u.P,d=new u.P,g=(0,a.b)(f,new u.S(new m.E,new m.E),!1);m.F.geodesicCoordinate(e,t,n.x,n.y,s,r,g.at(0),g.at(1)),i.setCoords(g.at(0).val,g.at(1).val),m.F.geodesicCoordinate(e,t,n.x,n.y,s,o,g.at(0),g.at(1)),d.setCoords(g.at(0).val,g.at(1).val);let P=(0,a.b)(f,new m.E,!1);for(m.F.geodeticDistance(e,t,h.x,h.y,i.x,i.y,null,P,null,0),_[0]=P.val,m.F.geodeticDistance(e,t,h.x,h.y,d.x,d.y,null,P,null,0),c[0]=P.val;_[0]<=c[0];)_[0]+=u.k;for(;_[0]>c[0];)_[0]-=u.k;for(;_[0]>=l;)_[0]-=u.k,c[0]-=u.k;for(;_[0]<l;)_[0]+=u.k,c[0]+=u.k}catch(e){f.error=e,f.hasError=!0}finally{(0,a.c)(f)}}function x(e,t,i,s){if(Number.isNaN(i)){for(;s+t-e>Math.PI;)s-=u.k;for(;e-(s+t)>Math.PI;)s+=u.k;return s}return s+t-i>Math.PI?s-=u.k:i-(s+t)>Math.PI&&(s+=u.k),s}function y(e,t,i,s,n,r){let o={stack:[],error:void 0,hasError:!1};try{if(s>=r)return!1;let h=i[0],l=i.at(-1),u=(0,a.b)(o,new m.E,!1),_=(0,a.b)(o,new m.E,!1),c=(0,a.b)(o,new m.E,!1);m.F.greatEllipticDistance(e,t,n.x,n.y,h.x,h.y,u,null,null),m.F.greatEllipticDistance(e,t,n.x,n.y,l.x,l.y,_,null,null),m.F.greatEllipticDistance(e,t,h.x,h.y,l.x,l.y,c,null,null);let f=Math.min(u.val,_.val)+c.val,d=f+s;if(d<r)return!0;let g=(0,a.b)(o,new m.E,!1);f=Math.max(u.val,_.val);for(let s=1;s<i.length-1;s++){let r=i[s];m.F.greatEllipticDistance(e,t,n.x,n.y,r.x,r.y,g,null,null),g.val>f&&(f=g.val)}return(d=f+s)<r}catch(e){o.error=e,o.hasError=!0}finally{(0,a.c)(o)}}function w(e,t,i,s,n,r,a,o){let h;if(s.length%2==0){let e=s.length>>1,t=s[e],i=s[e-1];h=u.P.lerp(t,i,.5)}else h=s[s.length-1>>1].clone();let l=h.clone(),_=(0,m.I)(e,t,l,75/180*Math.PI);return!!y(e,t,s,n,l,_)&&(null!==r&&(r.setCoordsPoint2D(h),r.scale(1/i)),null!==a&&a.setCoordsPoint2D(l),null!==o&&(o[0]=_),!0)}function C(e,t,i,s,n,r){let o={stack:[],error:void 0,hasError:!1};try{if(s>=r)return!1;let h=(0,a.b)(o,new m.E,!1);return m.F.greatEllipticDistance(e,t,n.x,n.y,i.x,i.y,h,null,null),h.val+s<r}catch(e){o.error=e,o.hasError=!0}finally{(0,a.c)(o)}}function S(e,t){return new m.H(e,t)}function v(e){return(0,h.f)(e,0)||(0,h.s)(e,0),e}class D{constructor(e){this.m_bRunningInGnomonic=!1,this.m_bNeedsSimplify=!1,this.m_gnomonic=null,this.m_gnomonicCenterRad=new u.P,this.m_minGnomonicRadius=Number.NaN,this.m_progressTracker=e}isRunningInGnomonic(){return this.m_bRunningInGnomonic}needsSimplify(){return this.m_bNeedsSimplify}getGnomonic(){return this.m_gnomonic}}class I extends D{constructor(e,t,i){super(e.m_progressTracker),this.m_segIter=null,this.m_bNextSegmentCannotJoin=!1,this.m_currentDensifiedDelta=[0],this.m_currentBufferedDelta=0,this.m_lastAzimuth=0,this.m_startAzimuth=[0],this.m_endAzimuth=[0],this.m_numWinds=0,this.m_debugCounter=0,this.m_bufferHelper=new o.a,this.m_densifiedPoints=[],this.m_bufferer=e,this.m_multiPath=t,this.m_densified=i,this.m_bNeedsSimplify=!0;let s=new r.J;this.m_multiPath.queryEnvelope(s);let n=s.getCenter(),a=n.clone();a.scale(this.m_bufferer.m_rpu),this.m_gnomonic=S(this.m_bufferer.m_gcs,n),this.m_gnomonicCenterRad=a.clone(),this.m_minGnomonicRadius=(0,m.I)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,a,75/180*Math.PI)}next(){if(this.m_bNextSegmentCannotJoin)return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),this.m_bufferHelper.clone();if(null===this.m_segIter){if(this.m_segIter=this.m_multiPath.getImpl().querySegmentIterator(),!this.m_segIter.nextPath())return null;null!==this.m_densified&&this.m_densified.addPathPoint2D(null,0,!0)}if(!this.m_segIter.hasNextSegment()){if(!this.m_segIter.nextPath())return null;null!=this.m_densified&&this.m_densified.addPathPoint2D(null,0,!0)}let e=null;this.m_currentBufferedDelta=0,this.m_currentDensifiedDelta=[0],this.m_numWinds=0,this.m_lastAzimuth=Number.NaN,this.m_bNextSegmentCannotJoin=!1,this.m_densifiedPoints.length=0;let t=0,i=new u.P,s=new u.P;for(;this.m_segIter.hasNextSegment()&&this.m_numWinds<16;){let n=this.m_segIter.nextSegment();if(i.setCoordsPoint2D(n.getStartXY()),s.setCoordsPoint2D(n.getEndXY()),i.scale(this.m_bufferer.m_rpu),s.scale(this.m_bufferer.m_rpu),(0,m.J)(i,s))i.x=s.x;else if((0,m.K)(i,s))s.x=i.x;else{let e=-1,t=-1,n=this.m_segIter.getPathIndex(),r=this.m_multiPath.getPathStart(n),a=this.m_multiPath.getPathEnd(n);if(e=this.m_segIter.getStartPointIndex()-1,t=this.m_segIter.getEndPointIndex()+1,e<r&&(e=this.m_multiPath.isClosedPath(n)?a-1:-1),t>a-1&&(t=this.m_multiPath.isClosedPath(n)?r:-1),-1!==e){let t=this.m_multiPath.getXY(e);t.scale(this.m_bufferer.m_rpu),(0,m.K)(t,i)&&(i.x=t.x)}if(-1!==t){let e=this.m_multiPath.getXY(t);e.scale(this.m_bufferer.m_rpu),(0,m.J)(s,e)&&(s.x=e.x)}}this.m_densifiedPoints.length=0;let r=(0,m.M)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,i,s,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta);if(0===t)this.m_bRunningInGnomonic=this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(this.m_densifiedPoints));else if(this.m_bRunningInGnomonic){if(!this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}}else if(w(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_densifiedPoints,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,null,null,null)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}if(0===r||(0,m.N)(i,s)?(this.m_bufferHelper.setEmpty(),this.m_bufferer.bufferPoint2D(i,this.m_bRunningInGnomonic,this.m_bufferHelper),this.m_bNextSegmentCannotJoin=!0):(this.m_bufferHelper.setEmpty(),this.m_bNextSegmentCannotJoin=this.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(r,this.m_bufferHelper)),this.m_bNextSegmentCannotJoin){this.m_segIter.previousSegment(),this.m_segIter.hasPreviousSegment()?(this.m_segIter.previousSegment(),this.m_segIter.nextSegment()):this.m_segIter.resetToFirstSegment(),null!=this.m_densified&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0);break}null!=this.m_densified&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0),null===e&&(e=new o.a).addPathPoint2D(null,0,!0),this.addJoinAndBufferLeftSide(e),t++}if(this.m_currentDensifiedDelta=[0],t>0){let n=this.m_segIter.getStartPointIndex(),r=this.m_segIter.getPathIndex();for(;t>0;){if(this.m_segIter.previousSegment(),i.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),s.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getEndPointIndex())),i.scale(this.m_bufferer.m_rpu),s.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic)if((0,m.J)(i,s))i.x=s.x;else if((0,m.K)(i,s))s.x=i.x;else{let e=-1,t=-1,n=this.m_segIter.getPathIndex(),r=this.m_multiPath.getPathStart(n),a=this.m_multiPath.getPathEnd(n);if(e=this.m_segIter.getStartPointIndex()-1,t=this.m_segIter.getEndPointIndex()+1,e<r&&(e=this.m_multiPath.isClosedPath(n)?a-1:-1),t>a-1&&(t=this.m_multiPath.isClosedPath(n)?r:-1),-1!==e){let t=this.m_multiPath.getXY(e);t.scale(this.m_bufferer.m_rpu),(0,m.K)(t,i)&&(i.x=t.x)}if(-1!==t){let e=this.m_multiPath.getXY(t);e.scale(this.m_bufferer.m_rpu),(0,m.J)(s,e)&&(s.x=e.x)}}this.m_densifiedPoints.length=0,(0,m.M)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,s,i,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta),this.addJoinAndBufferLeftSide(e),t--}return i.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),i.scale(this.m_bufferer.m_rpu),this.m_currentBufferedDelta=p(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,i,this.m_lastAzimuth+.5*Math.PI,this.m_lastAzimuth+1.5*Math.PI,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e),this.m_segIter.resetToVertex(n,r),this.m_segIter.nextSegment(),e}return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),this.m_bufferHelper.clone()}isSegmentBufferInCurrentGnomonic(e){return null!==this.m_gnomonic&&y(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(e){let t=new u.P,i=new u.P,s=[0];return w(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,t,i,s)?(this.m_gnomonicCenterRad.setCoordsPoint2D(i),this.m_minGnomonicRadius=s[0],this.m_gnomonic=S(this.m_bufferer.m_gcs,t),!0):(this.m_gnomonic=null,!1)}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e,t){return this.m_bufferer.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(this.m_densifiedPoints,e,this.m_startAzimuth[0],this.m_endAzimuth[0],this.m_bRunningInGnomonic,t)}addJoinAndBufferLeftSide(e){let t=this.m_densifiedPoints[0],i=Number.NaN,s=this.m_startAzimuth[0]-u.l,n=this.m_endAzimuth[0]+u.l,r=!1;if(!Number.isNaN(this.m_lastAzimuth)){s=this.m_lastAzimuth>=this.m_startAzimuth[0]?(i=this.m_lastAzimuth+u.l)+Math.PI-(this.m_lastAzimuth-this.m_startAzimuth[0]):(i=this.m_lastAzimuth+u.l)+Math.PI-(u.k-(this.m_startAzimuth[0]-this.m_lastAzimuth)),r=!(this.m_lastAzimuth>=this.m_startAzimuth[0]&&this.m_lastAzimuth-this.m_startAzimuth[0]<=Math.PI)&&!(this.m_lastAzimuth<this.m_startAzimuth[0]&&this.m_startAzimuth[0]-this.m_lastAzimuth>=Math.PI);let n=!1;if(Math.abs(s-i)<=.5*this.m_bufferer.m_cornerStep&&(r||(n=!0)),n){if(e.removePointFromPath(0,e.getPointCount()-1),!this.m_bRunningInGnomonic){let t=new u.P;t.setCoordsPoint2D(e.getXY(e.getPointCount()-1)),t.scale(this.m_bufferer.m_rpu),t.x-this.m_currentBufferedDelta<-Math.PI?this.m_currentBufferedDelta-=u.k:t.x-this.m_currentBufferedDelta>Math.PI&&(this.m_currentBufferedDelta+=u.k)}s=.5*(s+i)}else if(r){let i=new u.P;i.setCoordsPoint2D(t),i.scale(1/this.m_bufferer.m_rpu),e.insertPoint2D(0,-1,i)}else p(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_densifiedPoints[0],i,s,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e)}this.m_startAzimuth[0]!==this.m_lastAzimuth&&this.m_numWinds++,P(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_bufferer.m_curveType,this.m_densifiedPoints,s,n,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e),this.m_lastAzimuth=this.m_endAzimuth[0]}}class E extends D{constructor(e,t){super(e.m_progressTracker),this.m_pointIndex=-1,this.m_bufferer=e,this.m_multiPoint=t,this.m_bNeedsSimplify=!1;let i=new r.J;this.m_multiPoint.queryEnvelope(i);let s=i.getCenter(),n=s.clone();n.scale(this.m_bufferer.m_rpu),this.m_gnomonic=S(this.m_bufferer.m_gcs,s),this.m_gnomonicCenterRad=n.clone(),this.m_minGnomonicRadius=(0,m.I)(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,n,75/180*Math.PI)}next(){if(this.m_bNeedsSimplify=!1,++this.m_pointIndex===this.m_multiPoint.getPointCount())return null;let e=this.m_multiPoint.getXY(this.m_pointIndex);e.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic=this.isPointBufferInCurrentGnomonic(e),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(e));let t=new o.a,i=this.m_bufferer.bufferPoint2D(e,this.m_bRunningInGnomonic,t);return this.m_bNeedsSimplify=i,t}isPointBufferInCurrentGnomonic(e){return null!==this.m_gnomonic&&C(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(e){let t=new u.P,i=new u.P,s=[0];return!function(e,t,i,s,n,r,a,o){let h=(0,m.I)(e,t,s,75/180*Math.PI);return!!C(e,t,s,n,s,h)&&(null!==r&&(r.setCoordsPoint2D(s),r.scale(1/i)),null!==a&&a.setCoordsPoint2D(s),null!==o&&(o[0]=h),!0)}(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,t,i,s)?(this.m_gnomonic=null,!1):(this.m_gnomonicCenterRad.setCoordsPoint2D(i),this.m_minGnomonicRadius=s[0],this.m_gnomonic=S(this.m_bufferer.m_gcs,t),!0)}}class G{getOperatorType(){return 10110}supportsCurves(){return!0}accelerateGeometry(e,t,i){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,i,s,n,r,a,o){if(a){let a=new k(e,t,i,s,n,!1,r,o);return(new m.h).executeMany(a,t,o)}return new k(e,t,i,s,n,!1,r,o)}execute(e,t,i,r,m,a,o){let h=new s.S([e]),l=this.executeMany(h,t,i,[r],m,!1,a,o).next();return l||(0,n.c)("geodesic buffer null output"),l}}class k extends s.G{constructor(e,t,i,s,m,a,o,h){super(),this.m_currentUnionEnvelope2D=new r.J,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=h,a&&(0,n.b)(""),t||(0,n.t)(""),0===t.getCoordinateSystemType()&&(0,n.t)(""),this.m_inputGeoms=e,this.m_spatialReference=t,this.m_curveType=i,this.m_distances=s,this.m_convergenceOffset=m,this.m_bOutlineOnly=a,this.m_bUnion=o}next(){let e;for(;e=this.m_inputGeoms.next();)return(0,n.d)(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.geodesicBuffer(e,this.m_distances[this.m_dindex]);return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodesicBuffer(e,t){return function(e,t,i,s,r,m){s<Number.MAX_VALUE&&s>-Number.MAX_VALUE||(0,n.t)("Geodesic_bufferer.buffer - bad distance"),(0,n.d)(e);let a=(0,c.c)(e),o=a.getGeometryType();if((0,n.i)(o)){let e=a.getPointCount();if(Math.abs(s)>8e6&&(e>50||o!==n.G.enumMultiPoint&&4===i&&e>2)){let e=a,n=s>0?1:-1,o=s,h=1;do h++,o=(Math.abs(o)-7e6)*n;while(Math.abs(o)>8e6);o=s;for(let s=0;s<h-1;s++)e=g(e,t,i,7e6*n,r,h,m),o=(Math.abs(o)-7e6)*n;return g(e,t,i,o,r,h,m)}}return g(a,t,i,s,r,1,m)}(e,this.m_spatialReference,this.m_curveType,t,this.m_convergenceOffset,this.m_progressTracker)}}},64601:(e,t,i)=>{i.d(t,{c:()=>n});var s=i(16404);function n(e,t){let i=e.getGeometryType();return i===s.G.enumPoint?e:(0,s.h)(i)?function(e){if(function(e){for(let t=0,i=e.getPathCount();t<i;t++){let i=e.getPathSize(t);if(0===i||1===i&&(0===e.getSegmentCountPath(t)||e.getSegmentType(e.getPathStart(t))===s.G.enumLine||!e.isClosedPath(t)))return!1}return!0}(e))return e;let t=e.createInstance();for(let i=0,n=e.getPathCount();i<n;i++){let n=e.getPathSize(i);if(0!==n){if(1===n&&(0===e.getSegmentCountPath(i)||e.getSegmentType(e.getPathStart(i))===s.G.enumLine||!e.isClosedPath(i)))continue;t.addPath(e,i,!0)}}return t}(e):(i===s.G.enumMultiPoint||i===s.G.enumEnvelope||i===s.G.enumMultipatch&&(0,s.b)("not implemented for multipatch"),e)}}}]);