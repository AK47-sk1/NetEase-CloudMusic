window.onload = function() {
    //推荐，精选，我喜欢的歌单
    let c1=document.getElementsByClassName('section2')[0];
    let c2=document.getElementsByClassName('section3')[0];
    let c3=document.getElementsByClassName('section4')[0];
    let c4=this.document.getElementsByClassName('ti')[0];
    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');
    let content3 = document.getElementById('content3');
    let content4 = document.getElementById('content4');
    let playlist1 = document.getElementById('playlist1');
    let playlist2 = document.getElementById('playlist2');
    let playlist3 = document.getElementById('playlist3');
    let playlist4 = document.getElementById('playlist4');
    let playlist5 = document.getElementById('playlist5');
    let playlist6 = document.getElementById('playlist6');
    let p1=document.getElementById('p1');
    let p2=document.getElementById('p2');
    let p3=document.getElementById('p3');
    let p4=document.getElementById('p4');
    let p5=document.getElementById('p5');
    let p6=document.getElementById('p6');
    let Sections = [c1, c2, c3];
    let Contents = [content1, content2, content3,content4];
    let Playlists=[playlist1,playlist2,playlist3,playlist4,playlist5,playlist6];
    let Ps=[p1,p2,p3,p4,p5,p6];
    //歌单广场
    let g1=document.getElementsByClassName('g1')[0];
    let g2=document.getElementsByClassName('g2')[0];
    let g3=document.getElementsByClassName('g3')[0];
    let g4=document.getElementsByClassName('g4')[0];
    let g5=document.getElementsByClassName('g5')[0];
    let g6=document.getElementsByClassName('g6')[0];
    let g7=document.getElementsByClassName('g7')[0];
    let dg1=document.getElementById('dg1');
    let dg2=document.getElementById('dg2');
    let dg3=document.getElementById('dg3');
    let dg4=document.getElementById('dg4');
    let dg5=document.getElementById('dg5');
    let dg6=document.getElementById('dg6');
    let dg7=document.getElementById('dg7');
    let g=[g1,g2,g3,g4,g5,g6,g7];
    let dg=[dg1,dg2,dg3,dg4,dg5,dg6,dg7];
    //推荐
    let gi1=document.getElementById('gi1');
    let gi2=document.getElementById('gi2');
    let gi3=document.getElementById('gi3');
    let gi4=document.getElementById('gi4');
    let gi5=document.getElementById('gi5');
    let gi6=document.getElementById('gi6');
    let gi7=document.getElementById('gi7');
    let gi8=document.getElementById('gi8');
    let gi9=document.getElementById('gi9');
    let gi10=document.getElementById('gi10');
    let pl1=document.getElementById('pl1');
    let pl2=document.getElementById('pl2');
    let pl3=document.getElementById('pl3');
    let pl4=document.getElementById('pl4');
    let pl5=document.getElementById('pl5');
    let pl6=document.getElementById('pl6');
    let pl7=document.getElementById('pl7');
    let pl8=document.getElementById('pl8');
    let pl9=document.getElementById('pl9');
    let pl10=document.getElementById('pl10');
    let Pl=[pl1,pl2,pl3,pl4,pl5,pl6,pl7,pl8,pl9,pl10];
    function resetAll() {
        Sections.forEach(sec => {
            sec.style.backgroundColor = 'white';
            sec.style.color = 'black';
        });
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        Pl.forEach(p=>{
            p.classList.remove('content-active');
        })
    };
    c1.addEventListener('click',()=>{
        resetAll();
        c1.style.backgroundColor = 'red';
        c1.style.color = 'white';
        content1.classList.add('content-active');
    });
    c2.addEventListener('click',()=>{
        resetAll();
        c2.style.backgroundColor = 'red';
        c2.style.color = 'white';
        content2.classList.add('content-active');
        dg1.classList.add('content-active');
    });
    c3.addEventListener('click',()=>{
        resetAll();
        c3.style.backgroundColor = 'red';
        c3.style.color = 'white';
        content3.classList.add('content-active');
    });
    c4.addEventListener('click',()=>{
        let input=document.getElementsByClassName('input')[0];
        if(input.value===""){
            alert("请输入文本");
            return;
        }
        resetAll()
        content4.classList.add('content-active');
        let si1=document.getElementById('si1');
        let si2=document.getElementById('si2');
        let si3=document.getElementById('si3');
        let si4=document.getElementById('si4');
        let si5=document.getElementById('si5');
        let si6=document.getElementById('si6');
        let si7=document.getElementById('si7');
        let si8=document.getElementById('si8');
        let si9=document.getElementById('si9');
        let si10=document.getElementById('si10');
        let sn1=document.getElementById('sn1');
        let sn2=document.getElementById('sn2');
        let sn3=document.getElementById('sn3');
        let sn4=document.getElementById('sn4');
        let sn5=document.getElementById('sn5');
        let sn6=document.getElementById('sn6');
        let sn7=document.getElementById('sn7');
        let sn8=document.getElementById('sn8');
        let sn9=document.getElementById('sn9');
        let sn10=document.getElementById('sn10');
        let sa1=document.getElementById('sa1');
        let sa2=document.getElementById('sa2');
        let sa3=document.getElementById('sa3');
        let sa4=document.getElementById('sa4');
        let sa5=document.getElementById('sa5');
        let sa6=document.getElementById('sa6');
        let sa7=document.getElementById('sa7');
        let sa8=document.getElementById('sa8');
        let sa9=document.getElementById('sa9');
        let sa10=document.getElementById('sa10');
        let sau1=document.getElementById('sau1');
        let sau2=document.getElementById('sau2');
        let sau3=document.getElementById('sau3');
        let sau4=document.getElementById('sau4');
        let sau5=document.getElementById('sau5');
        let sau6=document.getElementById('sau6');
        let sau7=document.getElementById('sau7');
        let sau8=document.getElementById('sau8');
        let sau9=document.getElementById('sau9');
        let sau10=document.getElementById('sau10');
        let sal1=document.getElementById('sal1');
        let sal2=document.getElementById('sal2');
        let sal3=document.getElementById('sal3');
        let sal4=document.getElementById('sal4');
        let sal5=document.getElementById('sal5');
        let sal6=document.getElementById('sal6');
        let sal7=document.getElementById('sal7');
        let sal8=document.getElementById('sal8');
        let sal9=document.getElementById('sal9');
        let sal10=document.getElementById('sal10');
        let st1=document.getElementById('st1');
        let st2=document.getElementById('st2');
        let st3=document.getElementById('st3');
        let st4=document.getElementById('st4');
        let st5=document.getElementById('st5');
        let st6=document.getElementById('st6');
        let st7=document.getElementById('st7');
        let st8=document.getElementById('st8');
        let st9=document.getElementById('st9');
        let st10=document.getElementById('st10');
        let si=[si1,si2,si3,si4,si5,si6,si7,si8,si9,si10];
        let sn=[sn1,sn2,sn3,sn4,sn5,sn6,sn7,sn8,sn9,sn10];
        let sa=[sa1,sa2,sa3,sa4,sa5,sa6,sa7,sa8,sa9,sa10];
        let sau=[sau1,sau2,sau3,sau4,sau5,sau6,sau7,sau8,sau9,sau10];
        let sal=[sal1,sal2,sal3,sal4,sal5,sal6,sal7,sal8,sal9,sal10];
        let st=[st1,st2,st3,st4,st5,st6,st7,st8,st9,st10];        
        fetch(`http://localhost:3000/search?keywords=${input.value}`)
        .then(ans => ans.json())
        .then(ans => {
            for(let i=0;i<10;i++){
                let an=ans.result.songs[i].artists[0].name;
                let n=ans.result.songs[i].name;
                let id=ans.result.songs[i].id;
                fetch(`http://localhost:3000/song/url/match?id=${id}`)
                .then(res => res.json())
                .then(res => {
                    sau[i].src=res.data;
                })
                fetch(`http://localhost:3000/album?id=${ans.result.songs[i].album.id}`)
                .then(res=>res.json())
                .then(res=>{
                    si[i].src=res.album.picUrl;
                });
                sa[i].textContent=an;
                sn[i].textContent=n;
                let time=ans.result.songs[i].duration;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    st[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    st[i].textContent=`0${min}:${sec}`;
                }   
                sal[i].textContent=ans.result.songs[i].album.name;
            }
        })
        .catch(error=>alert(error));
    })
   
    //推荐歌单
    p1.addEventListener('click',()=>{
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        playlist1.classList.add('content-active');
    });
    p2.addEventListener('click',()=>{
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        playlist2.classList.add('content-active');
        let i21=document.getElementById('i21');
        let n21=document.getElementById('n21');
        let a21=document.getElementById('a21');
        let au21=document.getElementById('au21');
        let al21=document.getElementById('al21');
        let t21=document.getElementById('t21');
        let i22=document.getElementById('i22');
        let n22=document.getElementById('n22');
        let a22=document.getElementById('a22');
        let au22=document.getElementById('au22');
        let al22=document.getElementById('al22');
        let t22=document.getElementById('t22');
        let i23=document.getElementById('i23');
        let n23=document.getElementById('n23');
        let a23=document.getElementById('a23');
        let au23=document.getElementById('au23');
        let al23=document.getElementById('al23');
        let t23=document.getElementById('t23');
        let i24=document.getElementById('i24');
        let n24=document.getElementById('n24');
        let a24=document.getElementById('a24');
        let au24=document.getElementById('au24');
        let al24=document.getElementById('al24');
        let t24=document.getElementById('t24');
        let i25=document.getElementById('i25');
        let n25=document.getElementById('n25');
        let a25=document.getElementById('a25');
        let au25=document.getElementById('au25');
        let al25=document.getElementById('al25');
        let t25=document.getElementById('t25');
        let i26=document.getElementById('i26');
        let n26=document.getElementById('n26');
        let a26=document.getElementById('a26');
        let au26=document.getElementById('au26');
        let al26=document.getElementById('al26');
        let t26=document.getElementById('t26');
        let i27=document.getElementById('i27');
        let n27=document.getElementById('n27');
        let a27=document.getElementById('a27');
        let au27=document.getElementById('au27');
        let al27=document.getElementById('al27');
        let t27=document.getElementById('t27');
        let i28=document.getElementById('i28');
        let n28=document.getElementById('n28');
        let a28=document.getElementById('a28');
        let au28=document.getElementById('au28');
        let al28=document.getElementById('al28');
        let t28=document.getElementById('t28');
        let i29=document.getElementById('i29');
        let n29=document.getElementById('n29');
        let a29=document.getElementById('a29');
        let au29=document.getElementById('au29');
        let al29=document.getElementById('al29');
        let t29=document.getElementById('t29');
        let i30=document.getElementById('i30');
        let n30=document.getElementById('n30');
        let a30=document.getElementById('a30');
        let au30=document.getElementById('au30');
        let al30=document.getElementById('al30');
        let t30=document.getElementById('t30');
        let i_=[i21,i22,i23,i24,i25,i26,i27,i28,i29,i30];
        let n=[n21,n22,n23,n24,n25,n26,n27,n28,n29,n30];
        let a=[a21,a22,a23,a24,a25,a26,a27,a28,a29,a30];
        let au=[au21,au22,au23,au24,au25,au26,au27,au28,au29,au30];
        let al=[al21,al22,al23,al24,al25,al26,al27,al28,al29,al30];
        let t=[t21,t22,t23,t24,t25,t26,t27,t28,t29,t30];
        fetch(`http://localhost:3000/playlist/track/all?id=13862435391&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => console.error(err));
    });
    p3.addEventListener('click',()=>{
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        playlist3.classList.add('content-active');
        let i31=document.getElementById('i31');
        let n31=document.getElementById('n31');
        let a31=document.getElementById('a31');
        let au31=document.getElementById('au31');
        let al31=document.getElementById('al31');
        let t31=document.getElementById('t31');
        let i32=document.getElementById('i32');
        let n32=document.getElementById('n32');
        let a32=document.getElementById('a32');
        let au32=document.getElementById('au32');
        let al32=document.getElementById('al32');
        let t32=document.getElementById('t32');
        let i33=document.getElementById('i33');
        let n33=document.getElementById('n33');
        let a33=document.getElementById('a33');
        let au33=document.getElementById('au33');
        let al33=document.getElementById('al33');
        let t33=document.getElementById('t33');
        let i34=document.getElementById('i34');
        let n34=document.getElementById('n34');
        let a34=document.getElementById('a34');
        let au34=document.getElementById('au34');
        let al34=document.getElementById('al34');
        let t34=document.getElementById('t34');
        let i35=document.getElementById('i35');
        let n35=document.getElementById('n35');
        let a35=document.getElementById('a35');
        let au35=document.getElementById('au35');
        let al35=document.getElementById('al35');
        let t35=document.getElementById('t35');
        let i36=document.getElementById('i36');
        let n36=document.getElementById('n36');
        let a36=document.getElementById('a36');
        let au36=document.getElementById('au36');
        let al36=document.getElementById('al36');
        let t36=document.getElementById('t36');
        let i37=document.getElementById('i37');
        let n37=document.getElementById('n37');
        let a37=document.getElementById('a37');
        let au37=document.getElementById('au37');
        let al37=document.getElementById('al37');
        let t37=document.getElementById('t37');
        let i38=document.getElementById('i38');
        let n38=document.getElementById('n38');
        let a38=document.getElementById('a38');
        let au38=document.getElementById('au38');
        let al38=document.getElementById('al38');
        let t38=document.getElementById('t38');
        let i39=document.getElementById('i39');
        let n39=document.getElementById('n39');
        let a39=document.getElementById('a39');
        let au39=document.getElementById('au39');
        let al39=document.getElementById('al39');
        let t39=document.getElementById('t39');
        let i40=document.getElementById('i40');
        let n40=document.getElementById('n40');
        let a40=document.getElementById('a40');
        let au40=document.getElementById('au40');
        let al40=document.getElementById('al40');
        let t40=document.getElementById('t40');
        let i_=[i31,i32,i33,i34,i35,i36,i37,i38,i39,i40];
        let n=[n31,n32,n33,n34,n35,n36,n37,n38,n39,n40];
        let a=[a31,a32,a33,a34,a35,a36,a37,a38,a39,a40];
        let au=[au31,au32,au33,au34,au35,au36,au37,au38,au39,au40];
        let al=[al31,al32,al33,al34,al35,al36,al37,al38,al39,al40];
        let t=[t31,t32,t33,t34,t35,t36,t37,t38,t39,t40];
        fetch(`http://localhost:3000/playlist/track/all?id=740349186&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => console.error(err));
    });
    p4.addEventListener('click',()=>{
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        playlist4.classList.add('content-active');
        let i41=document.getElementById('i41');
        let n41=document.getElementById('n41');
        let a41=document.getElementById('a41');
        let au41=document.getElementById('au41');
        let al41=document.getElementById('al41');
        let t41=document.getElementById('t41');
        let i42=document.getElementById('i42');
        let n42=document.getElementById('n42');
        let a42=document.getElementById('a42');
        let au42=document.getElementById('au42');
        let al42=document.getElementById('al42');
        let t42=document.getElementById('t42');
        let i43=document.getElementById('i43');
        let n43=document.getElementById('n43');
        let a43=document.getElementById('a43');
        let au43=document.getElementById('au43');
        let al43=document.getElementById('al43');
        let t43=document.getElementById('t43');
        let i44=document.getElementById('i44');
        let n44=document.getElementById('n44');
        let a44=document.getElementById('a44');
        let au44=document.getElementById('au44');
        let al44=document.getElementById('al44');
        let t44=document.getElementById('t44');
        let i45=document.getElementById('i45');
        let n45=document.getElementById('n45');
        let a45=document.getElementById('a45');
        let au45=document.getElementById('au45');
        let al45=document.getElementById('al45');
        let t45=document.getElementById('t45');
        let i46=document.getElementById('i46');
        let n46=document.getElementById('n46');
        let a46=document.getElementById('a46');
        let au46=document.getElementById('au46');
        let al46=document.getElementById('al46');
        let t46=document.getElementById('t46');
        let i47=document.getElementById('i47');
        let n47=document.getElementById('n47');
        let a47=document.getElementById('a47');
        let au47=document.getElementById('au47');
        let al47=document.getElementById('al47');
        let t47=document.getElementById('t47');
        let i48=document.getElementById('i48');
        let n48=document.getElementById('n48');
        let a48=document.getElementById('a48');
        let au48=document.getElementById('au48');
        let al48=document.getElementById('al48');
        let t48=document.getElementById('t48');
        let i49=document.getElementById('i49');
        let n49=document.getElementById('n49');
        let a49=document.getElementById('a49');
        let au49=document.getElementById('au49');
        let al49=document.getElementById('al49');
        let t49=document.getElementById('t49');
        let i50=document.getElementById('i50');
        let n50=document.getElementById('n50');
        let a50=document.getElementById('a50');
        let au50=document.getElementById('au50');
        let al50=document.getElementById('al50');
        let t50=document.getElementById('t50');
        let i_=[i41,i42,i43,i44,i45,i46,i47,i48,i49,i50];
        let n=[n41,n42,n43,n44,n45,n46,n47,n48,n49,n50];
        let a=[a41,a42,a43,a44,a45,a46,a47,a48,a49,a50];
        let au=[au41,au42,au43,au44,au45,au46,au47,au48,au49,au50];
        let al=[al41,al42,al43,al44,al45,al46,al47,al48,al49,al50];
        let t=[t41,t42,t43,t44,t45,t46,t47,t48,t49,t50];
        fetch(`http://localhost:3000/playlist/track/all?id=2019129958&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => console.error(err));
    });
    p5.addEventListener('click',()=>{
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        playlist5.classList.add('content-active');
        let i51=document.getElementById('i51');
        let n51=document.getElementById('n51');
        let a51=document.getElementById('a51');
        let au51=document.getElementById('au51');
        let al51=document.getElementById('al51');
        let t51=document.getElementById('t51');
        let i52=document.getElementById('i52');
        let n52=document.getElementById('n52');
        let a52=document.getElementById('a52');
        let au52=document.getElementById('au52');
        let al52=document.getElementById('al52');
        let t52=document.getElementById('t52');
        let i53=document.getElementById('i53');
        let n53=document.getElementById('n53');
        let a53=document.getElementById('a53');
        let au53=document.getElementById('au53');
        let al53=document.getElementById('al53');
        let t53=document.getElementById('t53');
        let i54=document.getElementById('i54');
        let n54=document.getElementById('n54');
        let a54=document.getElementById('a54');
        let au54=document.getElementById('au54');
        let al54=document.getElementById('al54');
        let t54=document.getElementById('t54');
        let i55=document.getElementById('i55');
        let n55=document.getElementById('n55');
        let a55=document.getElementById('a55');
        let au55=document.getElementById('au55');
        let al55=document.getElementById('al55');
        let t55=document.getElementById('t55');
        let i56=document.getElementById('i56');
        let n56=document.getElementById('n56');
        let a56=document.getElementById('a56');
        let au56=document.getElementById('au56');
        let al56=document.getElementById('al56');
        let t56=document.getElementById('t56');
        let i57=document.getElementById('i57');
        let n57=document.getElementById('n57');
        let a57=document.getElementById('a57');
        let au57=document.getElementById('au57');
        let al57=document.getElementById('al57');
        let t57=document.getElementById('t57');
        let i58=document.getElementById('i58');
        let n58=document.getElementById('n58');
        let a58=document.getElementById('a58');
        let au58=document.getElementById('au58');
        let al58=document.getElementById('al58');
        let t58=document.getElementById('t58');
        let i59=document.getElementById('i59');
        let n59=document.getElementById('n59');
        let a59=document.getElementById('a59');
        let au59=document.getElementById('au59');
        let al59=document.getElementById('al59');
        let t59=document.getElementById('t59');
        let i60=document.getElementById('i60');
        let n60=document.getElementById('n60');
        let a60=document.getElementById('a60');
        let au60=document.getElementById('au60');
        let al60=document.getElementById('al60');
        let t60=document.getElementById('t60');
        let i_=[i51,i52,i53,i54,i55,i56,i57,i58,i59,i60];
        let n=[n51,n52,n53,n54,n55,n56,n57,n58,n59,n60];
        let a=[a51,a52,a53,a54,a55,a56,a57,a58,a59,a60];
        let au=[au51,au52,au53,au54,au55,au56,au57,au58,au59,au60];
        let al=[al51,al52,al53,al54,al55,al56,al57,al58,al59,al60];
        let t=[t51,t52,t53,t54,t55,t56,t57,t58,t59,t60];
        fetch(`http://localhost:3000/playlist/track/all?id=310970433&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => console.error(err));
    });
    p6.addEventListener('click',()=>{
        Contents.forEach(content => {
            content.classList.remove('content-active');
        });
        Playlists.forEach(pl=>{
            pl.classList.remove('content-active');
        })
        playlist6.classList.add('content-active');
        let i61=document.getElementById('i61');
        let n61=document.getElementById('n61');
        let a61=document.getElementById('a61');
        let au61=document.getElementById('au61');
        let al61=document.getElementById('al61');
        let t61=document.getElementById('t61');
        let i62=document.getElementById('i62');
        let n62=document.getElementById('n62');
        let a62=document.getElementById('a62');
        let au62=document.getElementById('au62');
        let al62=document.getElementById('al62');
        let t62=document.getElementById('t62');
        let i63=document.getElementById('i63');
        let n63=document.getElementById('n63');
        let a63=document.getElementById('a63');
        let au63=document.getElementById('au63');
        let al63=document.getElementById('al63');
        let t63=document.getElementById('t63');
        let i64=document.getElementById('i64');
        let n64=document.getElementById('n64');
        let a64=document.getElementById('a64');
        let au64=document.getElementById('au64');
        let al64=document.getElementById('al64');
        let t64=document.getElementById('t64');
        let i65=document.getElementById('i65');
        let n65=document.getElementById('n65');
        let a65=document.getElementById('a65');
        let au65=document.getElementById('au65');
        let al65=document.getElementById('al65');
        let t65=document.getElementById('t65');
        let i66=document.getElementById('i66');
        let n66=document.getElementById('n66');
        let a66=document.getElementById('a66');
        let au66=document.getElementById('au66');
        let al66=document.getElementById('al66');
        let t66=document.getElementById('t66');
        let i67=document.getElementById('i67');
        let n67=document.getElementById('n67');
        let a67=document.getElementById('a67');
        let au67=document.getElementById('au67');
        let al67=document.getElementById('al67');
        let t67=document.getElementById('t67');
        let i68=document.getElementById('i68');
        let n68=document.getElementById('n68');
        let a68=document.getElementById('a68');
        let au68=document.getElementById('au68');
        let al68=document.getElementById('al68');
        let t68=document.getElementById('t68');
        let i69=document.getElementById('i69');
        let n69=document.getElementById('n69');
        let a69=document.getElementById('a69');
        let au69=document.getElementById('au69');
        let al69=document.getElementById('al69');
        let t69=document.getElementById('t69');
        let i70=document.getElementById('i70');
        let n70=document.getElementById('n70');
        let a70=document.getElementById('a70');
        let au70=document.getElementById('au70');
        let al70=document.getElementById('al70');
        let t70=document.getElementById('t70');
        let i_=[i61,i62,i63,i64,i65,i66,i67,i68,i69,i70];
        let n=[n61,n62,n63,n64,n65,n66,n67,n68,n69,n70];
        let a=[a61,a62,a63,a64,a65,a66,a67,a68,a69,a70];
        let au=[au61,au62,au63,au64,au65,au66,au67,au68,au69,au70];
        let al=[al61,al62,al63,al64,al65,al66,al67,al68,al69,al70];
        let t=[t61,t62,t63,t64,t65,t66,t67,t68,t69,t70];
        fetch(`http://localhost:3000/playlist/track/all?id=12449928929&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => console.error(err));
    });
    
    function formatCount(count) {
        if (count >= 1e8) {
            return (count / 1e8).toFixed(1) + '亿';
        }
        if (count >= 1e4) {
            return (count / 1e4).toFixed(1) + '万';
        }
        return count.toString();
    }
    
    let dgpl2=document.getElementById('dgpl2');
    let dgi1=document.getElementById('dgi1');
    
    function resetAll1(){
        g.forEach(G => {
            G.style.color = 'black';
        });
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(p=>{
            p.classList.remove('content-active');
        })
        dgpl2.classList.remove('content-active');
    }
    g1.addEventListener('click',()=>{
        resetAll1();
        g1.style.color='rgb(213, 49, 49)';
        dg1.classList.add('content-active');
    })
    g2.addEventListener('click',()=>{
        resetAll1();
        g2.style.color='rgb(213, 49, 49)';
        dg2.classList.add('content-active');
        let di21=document.getElementById('di21');
        let di22=document.getElementById('di22');
        let di23=document.getElementById('di23');
        let di24=document.getElementById('di24');
        let di25=document.getElementById('di25');
        let di26=document.getElementById('di26');
        let di27=document.getElementById('di27');
        let di28=document.getElementById('di28');
        let di29=document.getElementById('di29');
        let di30=document.getElementById('di30');
        let dn21=document.getElementById('dn21');
        let dn22=document.getElementById('dn22');
        let dn23=document.getElementById('dn23');
        let dn24=document.getElementById('dn24');
        let dn25=document.getElementById('dn25');
        let dn26=document.getElementById('dn26');
        let dn27=document.getElementById('dn27');
        let dn28=document.getElementById('dn28');
        let dn29=document.getElementById('dn29');
        let dn30=document.getElementById('dn30');
        let da21=document.getElementById('da21');
        let da22=document.getElementById('da22');
        let da23=document.getElementById('da23');
        let da24=document.getElementById('da24');
        let da25=document.getElementById('da25');
        let da26=document.getElementById('da26');
        let da27=document.getElementById('da27');
        let da28=document.getElementById('da28');
        let da29=document.getElementById('da29');
        let da30=document.getElementById('da30');
        let dau21=document.getElementById('dau21');
        let dau22=document.getElementById('dau22');
        let dau23=document.getElementById('dau23');
        let dau24=document.getElementById('dau24');
        let dau25=document.getElementById('dau25');
        let dau26=document.getElementById('dau26');
        let dau27=document.getElementById('dau27');
        let dau28=document.getElementById('dau28');
        let dau29=document.getElementById('dau29');
        let dau30=document.getElementById('dau30');
        let dal21=document.getElementById('dal21');
        let dal22=document.getElementById('dal22');
        let dal23=document.getElementById('dal23');
        let dal24=document.getElementById('dal24');
        let dal25=document.getElementById('dal25');
        let dal26=document.getElementById('dal26');
        let dal27=document.getElementById('dal27');
        let dal28=document.getElementById('dal28');
        let dal29=document.getElementById('dal29');
        let dal30=document.getElementById('dal30');
        let dt21=document.getElementById('dt21');
        let dt22=document.getElementById('dt22');
        let dt23=document.getElementById('dt23');
        let dt24=document.getElementById('dt24');
        let dt25=document.getElementById('dt25');
        let dt26=document.getElementById('dt26');
        let dt27=document.getElementById('dt27');
        let dt28=document.getElementById('dt28');
        let dt29=document.getElementById('dt29');
        let dt30=document.getElementById('dt30');
        let i_=[di21,di22,di23,di24,di25,di26,di27,di28,di29,di30];
        let n=[dn21,dn22,dn23,dn24,dn25,dn26,dn27,dn28,dn29,dn30];
        let a=[da21,da22,da23,da24,da25,da26,da27,da28,da29,da30];
        let au=[dau21,dau22,dau23,dau24,dau25,dau26,dau27,dau28,dau29,dau30];
        let al=[dal21,dal22,dal23,dal24,dal25,dal26,dal27,dal28,dal29,dal30];
        let t=[dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30];

        let dgi1=document.getElementById('dgi1');
        let dgp1=document.getElementById('dgp1');
        let dgp1_2=document.getElementById('dgp1_2');
        let dgi2=document.getElementById('dgi2');
        let dgp2=document.getElementById('dgp2');
        let dgp22=document.getElementById('dgp22');
        let dgi3=document.getElementById('dgi3');
        let dgp3=document.getElementById('dgp3');
        let dgp32=document.getElementById('dgp32');
        let dgi4=document.getElementById('dgi4');
        let dgp4=document.getElementById('dgp4');
        let dgp42=document.getElementById('dgp42');
        let dgi5=document.getElementById('dgi5');
        let dgp5=document.getElementById('dgp5');
        let dgp52=document.getElementById('dgp52');
        let dgi6=document.getElementById('dgi6');
        let dgp6=document.getElementById('dgp6');
        let dgp62=document.getElementById('dgp62');
        let dgi7=document.getElementById('dgi7');
        let dgp7=document.getElementById('dgp7');
        let dgp72=document.getElementById('dgp72');
        let dgi8=document.getElementById('dgi8');
        let dgp8=document.getElementById('dgp8');
        let dgp82=document.getElementById('dgp82');
        let dgi9=document.getElementById('dgi9');
        let dgp9=document.getElementById('dgp9');
        let dgp92=document.getElementById('dgp92');
        let dgi10=document.getElementById('dgi10');
        let dgp10=document.getElementById('dgp10');
        let dgp102=document.getElementById('dgp102');
        let dgi=[dgi1,dgi2,dgi3,dgi4,dgi5,dgi6,dgi7,dgi8,dgi9,dgi10];
        let dgp_1=[dgp1,dgp2,dgp3,dgp4,dgp5,dgp6,dgp7,dgp8,dgp9,dgp10];
        let dgp_2=[dgp1_2,dgp22,dgp32,dgp42,dgp52,dgp62,dgp72,dgp82,dgp92,dgp102]

        let dgpl2i1=document.getElementById('dgpl2i1');
        let dgplh2=document.getElementById('dgplh2');
        let dgpl2s1=document.getElementById('dgpl2s1');
        let dgpl2i2=document.getElementById('dgpl2i2');
        let dgpl2s2=document.getElementById('dgpl2s2');
        let dgpl2s3=document.getElementById('dgpl2s3');
        let did=[];
        let ci=[];
        let des=[];
        let name=[];
        let authori=[];
        let authorn=[];
        let ct=[];
        fetch('http://localhost:3000/top/playlist/highquality?cat=华语&limit=10')
        .then(res=>res.json())
        .then(res=>{
            for(let j=0;j<10;j++){
                ci[j]=res.playlists[j].coverImgUrl;
                des[j]=res.playlists[j].description;
                name[j]=res.playlists[j].name;
                authori[j]=res.playlists[j].creator.avatarUrl;
                authorn[j]=res.playlists[j].creator.nickname;
                ct[j]=res.playlists[j].createTime;
                ct[j]=new Date(ct[j]);
                let p=res.playlists[j].playCount;
                dgp_2[j].textContent=formatCount(p);
                dgi[j].src=ci[j];
                dgp_1[j].textContent=name[j];
                
                let id=res.playlists[j].id;
                
                did[j]=id;
                }               
            });
            dgi1.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[0];
                dgplh2.textContent=name[0];
                dgpl2s1.textContent=des[0];
                dgpl2i2.src=authori[0];
                dgpl2s2.textContent=authorn[0];
                dgpl2s3.textContent=ct[0].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[0]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi2.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[1];
                dgplh2.textContent=name[1];
                dgpl2s1.textContent=des[1];
                dgpl2i2.src=authori[1];
                dgpl2s2.textContent=authorn[1];
                dgpl2s3.textContent=ct[1].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[1]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi3.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[2];
                dgplh2.textContent=name[2];
                dgpl2s1.textContent=des[2];
                dgpl2i2.src=authori[2];
                dgpl2s2.textContent=authorn[2];
                dgpl2s3.textContent=ct[2].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[2]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi4.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[3];
                dgplh2.textContent=name[3];
                dgpl2s1.textContent=des[3];
                dgpl2i2.src=authori[3];
                dgpl2s2.textContent=authorn[3];
                dgpl2s3.textContent=ct[3].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[3]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi5.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[4];
                dgplh2.textContent=name[4];
                dgpl2s1.textContent=des[4];
                dgpl2i2.src=authori[4];
                dgpl2s2.textContent=authorn[4];
                dgpl2s3.textContent=ct[4].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[4]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi6.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[5];
                dgplh2.textContent=name[5];
                dgpl2s1.textContent=des[5];
                dgpl2i2.src=authori[5];
                dgpl2s2.textContent=authorn[5];
                dgpl2s3.textContent=ct[5].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[5]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi7.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[6];
                dgplh2.textContent=name[6];
                dgpl2s1.textContent=des[6];
                dgpl2i2.src=authori[6];
                dgpl2s2.textContent=authorn[6];
                dgpl2s3.textContent=ct[6].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[6]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi8.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[7];
                dgplh2.textContent=name[7];
                dgpl2s1.textContent=des[7];
                dgpl2i2.src=authori[7];
                dgpl2s2.textContent=authorn[7];
                dgpl2s3.textContent=ct[7].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[7]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi9.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[8];
                dgplh2.textContent=name[8];
                dgpl2s1.textContent=des[8];
                dgpl2i2.src=authori[8];
                dgpl2s2.textContent=authorn[8];
                dgpl2s3.textContent=ct[8].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[8]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi10.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[9];
                dgplh2.textContent=name[9];
                dgpl2s1.textContent=des[9];
                dgpl2i2.src=authori[9];
                dgpl2s2.textContent=authorn[9];
                dgpl2s3.textContent=ct[9].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[9]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
    })
    
    g3.addEventListener('click',()=>{
        resetAll1();
        g3.style.color='rgb(213, 49, 49)';
        dg3.classList.add('content-active');
        let di21=document.getElementById('di21');
        let di22=document.getElementById('di22');
        let di23=document.getElementById('di23');
        let di24=document.getElementById('di24');
        let di25=document.getElementById('di25');
        let di26=document.getElementById('di26');
        let di27=document.getElementById('di27');
        let di28=document.getElementById('di28');
        let di29=document.getElementById('di29');
        let di30=document.getElementById('di30');
        let dn21=document.getElementById('dn21');
        let dn22=document.getElementById('dn22');
        let dn23=document.getElementById('dn23');
        let dn24=document.getElementById('dn24');
        let dn25=document.getElementById('dn25');
        let dn26=document.getElementById('dn26');
        let dn27=document.getElementById('dn27');
        let dn28=document.getElementById('dn28');
        let dn29=document.getElementById('dn29');
        let dn30=document.getElementById('dn30');
        let da21=document.getElementById('da21');
        let da22=document.getElementById('da22');
        let da23=document.getElementById('da23');
        let da24=document.getElementById('da24');
        let da25=document.getElementById('da25');
        let da26=document.getElementById('da26');
        let da27=document.getElementById('da27');
        let da28=document.getElementById('da28');
        let da29=document.getElementById('da29');
        let da30=document.getElementById('da30');
        let dau21=document.getElementById('dau21');
        let dau22=document.getElementById('dau22');
        let dau23=document.getElementById('dau23');
        let dau24=document.getElementById('dau24');
        let dau25=document.getElementById('dau25');
        let dau26=document.getElementById('dau26');
        let dau27=document.getElementById('dau27');
        let dau28=document.getElementById('dau28');
        let dau29=document.getElementById('dau29');
        let dau30=document.getElementById('dau30');
        let dal21=document.getElementById('dal21');
        let dal22=document.getElementById('dal22');
        let dal23=document.getElementById('dal23');
        let dal24=document.getElementById('dal24');
        let dal25=document.getElementById('dal25');
        let dal26=document.getElementById('dal26');
        let dal27=document.getElementById('dal27');
        let dal28=document.getElementById('dal28');
        let dal29=document.getElementById('dal29');
        let dal30=document.getElementById('dal30');
        let dt21=document.getElementById('dt21');
        let dt22=document.getElementById('dt22');
        let dt23=document.getElementById('dt23');
        let dt24=document.getElementById('dt24');
        let dt25=document.getElementById('dt25');
        let dt26=document.getElementById('dt26');
        let dt27=document.getElementById('dt27');
        let dt28=document.getElementById('dt28');
        let dt29=document.getElementById('dt29');
        let dt30=document.getElementById('dt30');
        let i_=[di21,di22,di23,di24,di25,di26,di27,di28,di29,di30];
        let n=[dn21,dn22,dn23,dn24,dn25,dn26,dn27,dn28,dn29,dn30];
        let a=[da21,da22,da23,da24,da25,da26,da27,da28,da29,da30];
        let au=[dau21,dau22,dau23,dau24,dau25,dau26,dau27,dau28,dau29,dau30];
        let al=[dal21,dal22,dal23,dal24,dal25,dal26,dal27,dal28,dal29,dal30];
        let t=[dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30];

        let dgi11=document.getElementById('dgi11');
        let dgp11=document.getElementById('dgp11');
        let dgp112=document.getElementById('dgp112');
        let dgi12=document.getElementById('dgi12');
        let dgp12=document.getElementById('dgp12');
        let dgp122=document.getElementById('dgp122');
        let dgi13=document.getElementById('dgi13');
        let dgp13=document.getElementById('dgp13');
        let dgp132=document.getElementById('dgp132');
        let dgi14=document.getElementById('dgi14');
        let dgp14=document.getElementById('dgp14');
        let dgp142=document.getElementById('dgp142');
        let dgi15=document.getElementById('dgi15');
        let dgp15=document.getElementById('dgp15');
        let dgp152=document.getElementById('dgp152');
        let dgi16=document.getElementById('dgi16');
        let dgp16=document.getElementById('dgp16');
        let dgp162=document.getElementById('dgp162');
        let dgi17=document.getElementById('dgi17');
        let dgp17=document.getElementById('dgp17');
        let dgp172=document.getElementById('dgp172');
        let dgi18=document.getElementById('dgi18');
        let dgp18=document.getElementById('dgp18');
        let dgp182=document.getElementById('dgp182');
        let dgi19=document.getElementById('dgi19');
        let dgp19=document.getElementById('dgp19');
        let dgp192=document.getElementById('dgp192');
        let dgi20=document.getElementById('dgi20');
        let dgp20=document.getElementById('dgp20');
        let dgp202=document.getElementById('dgp202');
        let dgi=[dgi11,dgi12,dgi13,dgi4,dgi15,dgi16,dgi17,dgi18,dgi19,dgi20];
        let dgp_1=[dgp11,dgp12,dgp13,dgp14,dgp15,dgp16,dgp17,dgp18,dgp19,dgp20];
        let dgp_2=[dgp112,dgp122,dgp132,dgp142,dgp152,dgp162,dgp172,dgp182,dgp192,dgp202]

        let dgpl2i1=document.getElementById('dgpl2i1');
        let dgplh2=document.getElementById('dgplh2');
        let dgpl2s1=document.getElementById('dgpl2s1');
        let dgpl2i2=document.getElementById('dgpl2i2');
        let dgpl2s2=document.getElementById('dgpl2s2');
        let dgpl2s3=document.getElementById('dgpl2s3');
        let did=[];
        let ci=[];
        let des=[];
        let name=[];
        let authori=[];
        let authorn=[];
        let ct=[];
        fetch('http://localhost:3000/top/playlist/highquality?cat=流行&limit=10')
        .then(res=>res.json())
        .then(res=>{
            for(let j=0;j<10;j++){
                ci[j]=res.playlists[j].coverImgUrl;
                des[j]=res.playlists[j].description;
                name[j]=res.playlists[j].name;
                authori[j]=res.playlists[j].creator.avatarUrl;
                authorn[j]=res.playlists[j].creator.nickname;
                ct[j]=res.playlists[j].createTime;
                ct[j]=new Date(ct[j]);
                let p=res.playlists[j].playCount;
                dgp_2[j].textContent=formatCount(p);
                dgi[j].src=ci[j];
                dgp_1[j].textContent=name[j];
                
                let id=res.playlists[j].id;
                
                did[j]=id;
                }               
            });
            dgi11.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[0];
                dgplh2.textContent=name[0];
                dgpl2s1.textContent=des[0];
                dgpl2i2.src=authori[0];
                dgpl2s2.textContent=authorn[0];
                dgpl2s3.textContent=ct[0].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[0]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi12.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[1];
                dgplh2.textContent=name[1];
                dgpl2s1.textContent=des[1];
                dgpl2i2.src=authori[1];
                dgpl2s2.textContent=authorn[1];
                dgpl2s3.textContent=ct[1].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[1]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi13.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[2];
                dgplh2.textContent=name[2];
                dgpl2s1.textContent=des[2];
                dgpl2i2.src=authori[2];
                dgpl2s2.textContent=authorn[2];
                dgpl2s3.textContent=ct[2].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[2]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi14.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[3];
                dgplh2.textContent=name[3];
                dgpl2s1.textContent=des[3];
                dgpl2i2.src=authori[3];
                dgpl2s2.textContent=authorn[3];
                dgpl2s3.textContent=ct[3].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[3]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi15.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[4];
                dgplh2.textContent=name[4];
                dgpl2s1.textContent=des[4];
                dgpl2i2.src=authori[4];
                dgpl2s2.textContent=authorn[4];
                dgpl2s3.textContent=ct[4].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[4]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi16.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[5];
                dgplh2.textContent=name[5];
                dgpl2s1.textContent=des[5];
                dgpl2i2.src=authori[5];
                dgpl2s2.textContent=authorn[5];
                dgpl2s3.textContent=ct[5].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[5]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi17.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[6];
                dgplh2.textContent=name[6];
                dgpl2s1.textContent=des[6];
                dgpl2i2.src=authori[6];
                dgpl2s2.textContent=authorn[6];
                dgpl2s3.textContent=ct[6].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[6]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi18.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[7];
                dgplh2.textContent=name[7];
                dgpl2s1.textContent=des[7];
                dgpl2i2.src=authori[7];
                dgpl2s2.textContent=authorn[7];
                dgpl2s3.textContent=ct[7].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[7]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi19.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[8];
                dgplh2.textContent=name[8];
                dgpl2s1.textContent=des[8];
                dgpl2i2.src=authori[8];
                dgpl2s2.textContent=authorn[8];
                dgpl2s3.textContent=ct[8].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[8]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi20.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[9];
                dgplh2.textContent=name[9];
                dgpl2s1.textContent=des[9];
                dgpl2i2.src=authori[9];
                dgpl2s2.textContent=authorn[9];
                dgpl2s3.textContent=ct[9].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[9]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
    })
    g4.addEventListener('click',()=>{
        resetAll1();
        g4.style.color='rgb(213, 49, 49)';
        dg4.classList.add('content-active');
        let di21=document.getElementById('di21');
        let di22=document.getElementById('di22');
        let di23=document.getElementById('di23');
        let di24=document.getElementById('di24');
        let di25=document.getElementById('di25');
        let di26=document.getElementById('di26');
        let di27=document.getElementById('di27');
        let di28=document.getElementById('di28');
        let di29=document.getElementById('di29');
        let di30=document.getElementById('di30');
        let dn21=document.getElementById('dn21');
        let dn22=document.getElementById('dn22');
        let dn23=document.getElementById('dn23');
        let dn24=document.getElementById('dn24');
        let dn25=document.getElementById('dn25');
        let dn26=document.getElementById('dn26');
        let dn27=document.getElementById('dn27');
        let dn28=document.getElementById('dn28');
        let dn29=document.getElementById('dn29');
        let dn30=document.getElementById('dn30');
        let da21=document.getElementById('da21');
        let da22=document.getElementById('da22');
        let da23=document.getElementById('da23');
        let da24=document.getElementById('da24');
        let da25=document.getElementById('da25');
        let da26=document.getElementById('da26');
        let da27=document.getElementById('da27');
        let da28=document.getElementById('da28');
        let da29=document.getElementById('da29');
        let da30=document.getElementById('da30');
        let dau21=document.getElementById('dau21');
        let dau22=document.getElementById('dau22');
        let dau23=document.getElementById('dau23');
        let dau24=document.getElementById('dau24');
        let dau25=document.getElementById('dau25');
        let dau26=document.getElementById('dau26');
        let dau27=document.getElementById('dau27');
        let dau28=document.getElementById('dau28');
        let dau29=document.getElementById('dau29');
        let dau30=document.getElementById('dau30');
        let dal21=document.getElementById('dal21');
        let dal22=document.getElementById('dal22');
        let dal23=document.getElementById('dal23');
        let dal24=document.getElementById('dal24');
        let dal25=document.getElementById('dal25');
        let dal26=document.getElementById('dal26');
        let dal27=document.getElementById('dal27');
        let dal28=document.getElementById('dal28');
        let dal29=document.getElementById('dal29');
        let dal30=document.getElementById('dal30');
        let dt21=document.getElementById('dt21');
        let dt22=document.getElementById('dt22');
        let dt23=document.getElementById('dt23');
        let dt24=document.getElementById('dt24');
        let dt25=document.getElementById('dt25');
        let dt26=document.getElementById('dt26');
        let dt27=document.getElementById('dt27');
        let dt28=document.getElementById('dt28');
        let dt29=document.getElementById('dt29');
        let dt30=document.getElementById('dt30');
        let i_=[di21,di22,di23,di24,di25,di26,di27,di28,di29,di30];
        let n=[dn21,dn22,dn23,dn24,dn25,dn26,dn27,dn28,dn29,dn30];
        let a=[da21,da22,da23,da24,da25,da26,da27,da28,da29,da30];
        let au=[dau21,dau22,dau23,dau24,dau25,dau26,dau27,dau28,dau29,dau30];
        let al=[dal21,dal22,dal23,dal24,dal25,dal26,dal27,dal28,dal29,dal30];
        let t=[dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30];

        let dgi31=document.getElementById('dgi31');
        let dgp31=document.getElementById('dgp31');
        let dgp312=document.getElementById('dgp312');
        let dgi32=document.getElementById('dgi32');
        let dgp3_2=document.getElementById('dgp3_2');
        let dgp322=document.getElementById('dgp322');
        let dgi33=document.getElementById('dgi33');
        let dgp33=document.getElementById('dgp33');
        let dgp332=document.getElementById('dgp332');
        let dgi34=document.getElementById('dgi34');
        let dgp34=document.getElementById('dgp34');
        let dgp342=document.getElementById('dgp342');
        let dgi35=document.getElementById('dgi35');
        let dgp35=document.getElementById('dgp35');
        let dgp352=document.getElementById('dgp352');
        let dgi36=document.getElementById('dgi36');
        let dgp36=document.getElementById('dgp36');
        let dgp362=document.getElementById('dgp362');
        let dgi37=document.getElementById('dgi37');
        let dgp37=document.getElementById('dgp37');
        let dgp372=document.getElementById('dgp372');
        let dgi38=document.getElementById('dgi38');
        let dgp38=document.getElementById('dgp38');
        let dgp382=document.getElementById('dgp382');
        let dgi39=document.getElementById('dgi39');
        let dgp39=document.getElementById('dgp39');
        let dgp392=document.getElementById('dgp392');
        let dgi40=document.getElementById('dgi40');
        let dgp40=document.getElementById('dgp40');
        let dgp402=document.getElementById('dgp402');
        let dgi=[dgi31,dgi32,dgi33,dgi34,dgi35,dgi36,dgi37,dgi38,dgi39,dgi40];
        let dgp_1=[dgp31,dgp3_2,dgp33,dgp34,dgp35,dgp36,dgp37,dgp38,dgp39,dgp40];
        let dgp_2=[dgp312,dgp322,dgp332,dgp342,dgp352,dgp362,dgp372,dgp382,dgp392,dgp402]

        let dgpl2i1=document.getElementById('dgpl2i1');
        let dgplh2=document.getElementById('dgplh2');
        let dgpl2s1=document.getElementById('dgpl2s1');
        let dgpl2i2=document.getElementById('dgpl2i2');
        let dgpl2s2=document.getElementById('dgpl2s2');
        let dgpl2s3=document.getElementById('dgpl2s3');
        let did=[];
        let ci=[];
        let des=[];
        let name=[];
        let authori=[];
        let authorn=[];
        let ct=[];
        fetch('http://localhost:3000/top/playlist/highquality?cat=摇滚&limit=10')
        .then(res=>res.json())
        .then(res=>{
            for(let j=0;j<10;j++){
                ci[j]=res.playlists[j].coverImgUrl;
                des[j]=res.playlists[j].description;
                name[j]=res.playlists[j].name;
                authori[j]=res.playlists[j].creator.avatarUrl;
                authorn[j]=res.playlists[j].creator.nickname;
                ct[j]=res.playlists[j].createTime;
                ct[j]=new Date(ct[j]);
                let p=res.playlists[j].playCount;
                dgp_2[j].textContent=formatCount(p);
                dgi[j].src=ci[j];
                dgp_1[j].textContent=name[j];
                
                let id=res.playlists[j].id;
                
                did[j]=id;
                }               
            });
            dgi31.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[0];
                dgplh2.textContent=name[0];
                dgpl2s1.textContent=des[0];
                dgpl2i2.src=authori[0];
                dgpl2s2.textContent=authorn[0];
                dgpl2s3.textContent=ct[0].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[0]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi32.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[1];
                dgplh2.textContent=name[1];
                dgpl2s1.textContent=des[1];
                dgpl2i2.src=authori[1];
                dgpl2s2.textContent=authorn[1];
                dgpl2s3.textContent=ct[1].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[1]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi33.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[2];
                dgplh2.textContent=name[2];
                dgpl2s1.textContent=des[2];
                dgpl2i2.src=authori[2];
                dgpl2s2.textContent=authorn[2];
                dgpl2s3.textContent=ct[2].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[2]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi34.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[3];
                dgplh2.textContent=name[3];
                dgpl2s1.textContent=des[3];
                dgpl2i2.src=authori[3];
                dgpl2s2.textContent=authorn[3];
                dgpl2s3.textContent=ct[3].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[3]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi35.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[4];
                dgplh2.textContent=name[4];
                dgpl2s1.textContent=des[4];
                dgpl2i2.src=authori[4];
                dgpl2s2.textContent=authorn[4];
                dgpl2s3.textContent=ct[4].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[4]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi36.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[5];
                dgplh2.textContent=name[5];
                dgpl2s1.textContent=des[5];
                dgpl2i2.src=authori[5];
                dgpl2s2.textContent=authorn[5];
                dgpl2s3.textContent=ct[5].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[5]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi37.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[6];
                dgplh2.textContent=name[6];
                dgpl2s1.textContent=des[6];
                dgpl2i2.src=authori[6];
                dgpl2s2.textContent=authorn[6];
                dgpl2s3.textContent=ct[6].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[6]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi38.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[7];
                dgplh2.textContent=name[7];
                dgpl2s1.textContent=des[7];
                dgpl2i2.src=authori[7];
                dgpl2s2.textContent=authorn[7];
                dgpl2s3.textContent=ct[7].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[7]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi39.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[8];
                dgplh2.textContent=name[8];
                dgpl2s1.textContent=des[8];
                dgpl2i2.src=authori[8];
                dgpl2s2.textContent=authorn[8];
                dgpl2s3.textContent=ct[8].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[8]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi40.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[9];
                dgplh2.textContent=name[9];
                dgpl2s1.textContent=des[9];
                dgpl2i2.src=authori[9];
                dgpl2s2.textContent=authorn[9];
                dgpl2s3.textContent=ct[9].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[9]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
    })
    g5.addEventListener('click',()=>{
        resetAll1();
        g5.style.color='rgb(213, 49, 49)';
        dg5.classList.add('content-active');
        let di21=document.getElementById('di21');
        let di22=document.getElementById('di22');
        let di23=document.getElementById('di23');
        let di24=document.getElementById('di24');
        let di25=document.getElementById('di25');
        let di26=document.getElementById('di26');
        let di27=document.getElementById('di27');
        let di28=document.getElementById('di28');
        let di29=document.getElementById('di29');
        let di30=document.getElementById('di30');
        let dn21=document.getElementById('dn21');
        let dn22=document.getElementById('dn22');
        let dn23=document.getElementById('dn23');
        let dn24=document.getElementById('dn24');
        let dn25=document.getElementById('dn25');
        let dn26=document.getElementById('dn26');
        let dn27=document.getElementById('dn27');
        let dn28=document.getElementById('dn28');
        let dn29=document.getElementById('dn29');
        let dn30=document.getElementById('dn30');
        let da21=document.getElementById('da21');
        let da22=document.getElementById('da22');
        let da23=document.getElementById('da23');
        let da24=document.getElementById('da24');
        let da25=document.getElementById('da25');
        let da26=document.getElementById('da26');
        let da27=document.getElementById('da27');
        let da28=document.getElementById('da28');
        let da29=document.getElementById('da29');
        let da30=document.getElementById('da30');
        let dau21=document.getElementById('dau21');
        let dau22=document.getElementById('dau22');
        let dau23=document.getElementById('dau23');
        let dau24=document.getElementById('dau24');
        let dau25=document.getElementById('dau25');
        let dau26=document.getElementById('dau26');
        let dau27=document.getElementById('dau27');
        let dau28=document.getElementById('dau28');
        let dau29=document.getElementById('dau29');
        let dau30=document.getElementById('dau30');
        let dal21=document.getElementById('dal21');
        let dal22=document.getElementById('dal22');
        let dal23=document.getElementById('dal23');
        let dal24=document.getElementById('dal24');
        let dal25=document.getElementById('dal25');
        let dal26=document.getElementById('dal26');
        let dal27=document.getElementById('dal27');
        let dal28=document.getElementById('dal28');
        let dal29=document.getElementById('dal29');
        let dal30=document.getElementById('dal30');
        let dt21=document.getElementById('dt21');
        let dt22=document.getElementById('dt22');
        let dt23=document.getElementById('dt23');
        let dt24=document.getElementById('dt24');
        let dt25=document.getElementById('dt25');
        let dt26=document.getElementById('dt26');
        let dt27=document.getElementById('dt27');
        let dt28=document.getElementById('dt28');
        let dt29=document.getElementById('dt29');
        let dt30=document.getElementById('dt30');
        let i_=[di21,di22,di23,di24,di25,di26,di27,di28,di29,di30];
        let n=[dn21,dn22,dn23,dn24,dn25,dn26,dn27,dn28,dn29,dn30];
        let a=[da21,da22,da23,da24,da25,da26,da27,da28,da29,da30];
        let au=[dau21,dau22,dau23,dau24,dau25,dau26,dau27,dau28,dau29,dau30];
        let al=[dal21,dal22,dal23,dal24,dal25,dal26,dal27,dal28,dal29,dal30];
        let t=[dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30];

        let dgi21=document.getElementById('dgi21');
        let dgp21=document.getElementById('dgp21');
        let dgp212=document.getElementById('dgp212');
        let dgi22=document.getElementById('dgi22');
        let dgp2_2=document.getElementById('dgp2_2');
        let dgp222=document.getElementById('dgp222');
        let dgi23=document.getElementById('dgi23');
        let dgp23=document.getElementById('dgp23');
        let dgp232=document.getElementById('dgp232');
        let dgi24=document.getElementById('dgi24');
        let dgp24=document.getElementById('dgp24');
        let dgp242=document.getElementById('dgp242');
        let dgi25=document.getElementById('dgi25');
        let dgp25=document.getElementById('dgp25');
        let dgp252=document.getElementById('dgp252');
        let dgi26=document.getElementById('dgi26');
        let dgp26=document.getElementById('dgp26');
        let dgp262=document.getElementById('dgp262');
        let dgi27=document.getElementById('dgi27');
        let dgp27=document.getElementById('dgp27');
        let dgp272=document.getElementById('dgp272');
        let dgi28=document.getElementById('dgi28');
        let dgp28=document.getElementById('dgp28');
        let dgp282=document.getElementById('dgp282');
        let dgi29=document.getElementById('dgi29');
        let dgp29=document.getElementById('dgp29');
        let dgp292=document.getElementById('dgp292');
        let dgi30=document.getElementById('dgi30');
        let dgp30=document.getElementById('dgp30');
        let dgp302=document.getElementById('dgp302');
        let dgi=[dgi21,dgi22,dgi23,dgi24,dgi25,dgi26,dgi27,dgi28,dgi29,dgi30];
        let dgp_1=[dgp21,dgp2_2,dgp23,dgp24,dgp25,dgp26,dgp27,dgp28,dgp29,dgp30];
        let dgp_2=[dgp212,dgp222,dgp232,dgp242,dgp252,dgp262,dgp272,dgp282,dgp292,dgp302]

        let dgpl2i1=document.getElementById('dgpl2i1');
        let dgplh2=document.getElementById('dgplh2');
        let dgpl2s1=document.getElementById('dgpl2s1');
        let dgpl2i2=document.getElementById('dgpl2i2');
        let dgpl2s2=document.getElementById('dgpl2s2');
        let dgpl2s3=document.getElementById('dgpl2s3');
        let did=[];
        let ci=[];
        let des=[];
        let name=[];
        let authori=[];
        let authorn=[];
        let ct=[];
        fetch('http://localhost:3000/top/playlist/highquality?cat=民谣&limit=10')
        .then(res=>res.json())
        .then(res=>{
            for(let j=0;j<10;j++){
                ci[j]=res.playlists[j].coverImgUrl;
                des[j]=res.playlists[j].description;
                name[j]=res.playlists[j].name;
                authori[j]=res.playlists[j].creator.avatarUrl;
                authorn[j]=res.playlists[j].creator.nickname;
                ct[j]=res.playlists[j].createTime;
                ct[j]=new Date(ct[j]);
                let p=res.playlists[j].playCount;
                dgp_2[j].textContent=formatCount(p);
                dgi[j].src=ci[j];
                dgp_1[j].textContent=name[j];
                
                let id=res.playlists[j].id;
                
                did[j]=id;
                }               
            });
            dgi21.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[0];
                dgplh2.textContent=name[0];
                dgpl2s1.textContent=des[0];
                dgpl2i2.src=authori[0];
                dgpl2s2.textContent=authorn[0];
                dgpl2s3.textContent=ct[0].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[0]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi22.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[1];
                dgplh2.textContent=name[1];
                dgpl2s1.textContent=des[1];
                dgpl2i2.src=authori[1];
                dgpl2s2.textContent=authorn[1];
                dgpl2s3.textContent=ct[1].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[1]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi23.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[2];
                dgplh2.textContent=name[2];
                dgpl2s1.textContent=des[2];
                dgpl2i2.src=authori[2];
                dgpl2s2.textContent=authorn[2];
                dgpl2s3.textContent=ct[2].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[2]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi24.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[3];
                dgplh2.textContent=name[3];
                dgpl2s1.textContent=des[3];
                dgpl2i2.src=authori[3];
                dgpl2s2.textContent=authorn[3];
                dgpl2s3.textContent=ct[3].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[3]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi25.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[4];
                dgplh2.textContent=name[4];
                dgpl2s1.textContent=des[4];
                dgpl2i2.src=authori[4];
                dgpl2s2.textContent=authorn[4];
                dgpl2s3.textContent=ct[4].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[4]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi26.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[5];
                dgplh2.textContent=name[5];
                dgpl2s1.textContent=des[5];
                dgpl2i2.src=authori[5];
                dgpl2s2.textContent=authorn[5];
                dgpl2s3.textContent=ct[5].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[5]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi27.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[6];
                dgplh2.textContent=name[6];
                dgpl2s1.textContent=des[6];
                dgpl2i2.src=authori[6];
                dgpl2s2.textContent=authorn[6];
                dgpl2s3.textContent=ct[6].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[6]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi28.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[7];
                dgplh2.textContent=name[7];
                dgpl2s1.textContent=des[7];
                dgpl2i2.src=authori[7];
                dgpl2s2.textContent=authorn[7];
                dgpl2s3.textContent=ct[7].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[7]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi29.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[8];
                dgplh2.textContent=name[8];
                dgpl2s1.textContent=des[8];
                dgpl2i2.src=authori[8];
                dgpl2s2.textContent=authorn[8];
                dgpl2s3.textContent=ct[8].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[8]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi30.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[9];
                dgplh2.textContent=name[9];
                dgpl2s1.textContent=des[9];
                dgpl2i2.src=authori[9];
                dgpl2s2.textContent=authorn[9];
                dgpl2s3.textContent=ct[9].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[9]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
    })
    g6.addEventListener('click',()=>{
        resetAll1();
        g6.style.color='rgb(213, 49, 49)';
        dg6.classList.add('content-active');
        let di21=document.getElementById('di21');
        let di22=document.getElementById('di22');
        let di23=document.getElementById('di23');
        let di24=document.getElementById('di24');
        let di25=document.getElementById('di25');
        let di26=document.getElementById('di26');
        let di27=document.getElementById('di27');
        let di28=document.getElementById('di28');
        let di29=document.getElementById('di29');
        let di30=document.getElementById('di30');
        let dn21=document.getElementById('dn21');
        let dn22=document.getElementById('dn22');
        let dn23=document.getElementById('dn23');
        let dn24=document.getElementById('dn24');
        let dn25=document.getElementById('dn25');
        let dn26=document.getElementById('dn26');
        let dn27=document.getElementById('dn27');
        let dn28=document.getElementById('dn28');
        let dn29=document.getElementById('dn29');
        let dn30=document.getElementById('dn30');
        let da21=document.getElementById('da21');
        let da22=document.getElementById('da22');
        let da23=document.getElementById('da23');
        let da24=document.getElementById('da24');
        let da25=document.getElementById('da25');
        let da26=document.getElementById('da26');
        let da27=document.getElementById('da27');
        let da28=document.getElementById('da28');
        let da29=document.getElementById('da29');
        let da30=document.getElementById('da30');
        let dau21=document.getElementById('dau21');
        let dau22=document.getElementById('dau22');
        let dau23=document.getElementById('dau23');
        let dau24=document.getElementById('dau24');
        let dau25=document.getElementById('dau25');
        let dau26=document.getElementById('dau26');
        let dau27=document.getElementById('dau27');
        let dau28=document.getElementById('dau28');
        let dau29=document.getElementById('dau29');
        let dau30=document.getElementById('dau30');
        let dal21=document.getElementById('dal21');
        let dal22=document.getElementById('dal22');
        let dal23=document.getElementById('dal23');
        let dal24=document.getElementById('dal24');
        let dal25=document.getElementById('dal25');
        let dal26=document.getElementById('dal26');
        let dal27=document.getElementById('dal27');
        let dal28=document.getElementById('dal28');
        let dal29=document.getElementById('dal29');
        let dal30=document.getElementById('dal30');
        let dt21=document.getElementById('dt21');
        let dt22=document.getElementById('dt22');
        let dt23=document.getElementById('dt23');
        let dt24=document.getElementById('dt24');
        let dt25=document.getElementById('dt25');
        let dt26=document.getElementById('dt26');
        let dt27=document.getElementById('dt27');
        let dt28=document.getElementById('dt28');
        let dt29=document.getElementById('dt29');
        let dt30=document.getElementById('dt30');
        let i_=[di21,di22,di23,di24,di25,di26,di27,di28,di29,di30];
        let n=[dn21,dn22,dn23,dn24,dn25,dn26,dn27,dn28,dn29,dn30];
        let a=[da21,da22,da23,da24,da25,da26,da27,da28,da29,da30];
        let au=[dau21,dau22,dau23,dau24,dau25,dau26,dau27,dau28,dau29,dau30];
        let al=[dal21,dal22,dal23,dal24,dal25,dal26,dal27,dal28,dal29,dal30];
        let t=[dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30];

        let dgi41=document.getElementById('dgi41');
        let dgp41=document.getElementById('dgp41');
        let dgp412=document.getElementById('dgp412');
        let dgi42=document.getElementById('dgi42');
        let dgp4_2=document.getElementById('dgp4_2');
        let dgp422=document.getElementById('dgp422');
        let dgi43=document.getElementById('dgi43');
        let dgp43=document.getElementById('dgp43');
        let dgp432=document.getElementById('dgp432');
        let dgi44=document.getElementById('dgi44');
        let dgp44=document.getElementById('dgp44');
        let dgp442=document.getElementById('dgp442');
        let dgi45=document.getElementById('dgi45');
        let dgp45=document.getElementById('dgp45');
        let dgp452=document.getElementById('dgp452');
        let dgi46=document.getElementById('dgi46');
        let dgp46=document.getElementById('dgp46');
        let dgp462=document.getElementById('dgp462');
        let dgi47=document.getElementById('dgi47');
        let dgp47=document.getElementById('dgp47');
        let dgp472=document.getElementById('dgp472');
        let dgi48=document.getElementById('dgi48');
        let dgp48=document.getElementById('dgp48');
        let dgp482=document.getElementById('dgp482');
        let dgi49=document.getElementById('dgi49');
        let dgp49=document.getElementById('dgp49');
        let dgp492=document.getElementById('dgp492');
        let dgi50=document.getElementById('dgi50');
        let dgp50=document.getElementById('dgp50');
        let dgp502=document.getElementById('dgp502');
        let dgi=[dgi41,dgi42,dgi43,dgi44,dgi45,dgi46,dgi47,dgi48,dgi49,dgi50];
        let dgp_1=[dgp41,dgp4_2,dgp43,dgp44,dgp45,dgp46,dgp47,dgp48,dgp49,dgp50];
        let dgp_2=[dgp412,dgp422,dgp432,dgp442,dgp452,dgp462,dgp472,dgp482,dgp492,dgp502]

        let dgpl2i1=document.getElementById('dgpl2i1');
        let dgplh2=document.getElementById('dgplh2');
        let dgpl2s1=document.getElementById('dgpl2s1');
        let dgpl2i2=document.getElementById('dgpl2i2');
        let dgpl2s2=document.getElementById('dgpl2s2');
        let dgpl2s3=document.getElementById('dgpl2s3');
        let did=[];
        let ci=[];
        let des=[];
        let name=[];
        let authori=[];
        let authorn=[];
        let ct=[];
        fetch('http://localhost:3000/top/playlist/highquality?cat=电子&limit=10')
        .then(res=>res.json())
        .then(res=>{
            for(let j=0;j<10;j++){
                ci[j]=res.playlists[j].coverImgUrl;
                des[j]=res.playlists[j].description;
                name[j]=res.playlists[j].name;
                authori[j]=res.playlists[j].creator.avatarUrl;
                authorn[j]=res.playlists[j].creator.nickname;
                ct[j]=res.playlists[j].createTime;
                ct[j]=new Date(ct[j]);
                let p=res.playlists[j].playCount;
                dgp_2[j].textContent=formatCount(p);
                dgi[j].src=ci[j];
                dgp_1[j].textContent=name[j];
                
                let id=res.playlists[j].id;
                
                did[j]=id;
                }               
            });
            dgi41.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[0];
                dgplh2.textContent=name[0];
                dgpl2s1.textContent=des[0];
                dgpl2i2.src=authori[0];
                dgpl2s2.textContent=authorn[0];
                dgpl2s3.textContent=ct[0].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[0]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi42.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[1];
                dgplh2.textContent=name[1];
                dgpl2s1.textContent=des[1];
                dgpl2i2.src=authori[1];
                dgpl2s2.textContent=authorn[1];
                dgpl2s3.textContent=ct[1].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[1]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi43.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[2];
                dgplh2.textContent=name[2];
                dgpl2s1.textContent=des[2];
                dgpl2i2.src=authori[2];
                dgpl2s2.textContent=authorn[2];
                dgpl2s3.textContent=ct[2].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[2]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi44.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[3];
                dgplh2.textContent=name[3];
                dgpl2s1.textContent=des[3];
                dgpl2i2.src=authori[3];
                dgpl2s2.textContent=authorn[3];
                dgpl2s3.textContent=ct[3].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[3]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi45.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[4];
                dgplh2.textContent=name[4];
                dgpl2s1.textContent=des[4];
                dgpl2i2.src=authori[4];
                dgpl2s2.textContent=authorn[4];
                dgpl2s3.textContent=ct[4].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[4]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi46.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[5];
                dgplh2.textContent=name[5];
                dgpl2s1.textContent=des[5];
                dgpl2i2.src=authori[5];
                dgpl2s2.textContent=authorn[5];
                dgpl2s3.textContent=ct[5].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[5]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi47.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[6];
                dgplh2.textContent=name[6];
                dgpl2s1.textContent=des[6];
                dgpl2i2.src=authori[6];
                dgpl2s2.textContent=authorn[6];
                dgpl2s3.textContent=ct[6].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[6]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi48.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[7];
                dgplh2.textContent=name[7];
                dgpl2s1.textContent=des[7];
                dgpl2i2.src=authori[7];
                dgpl2s2.textContent=authorn[7];
                dgpl2s3.textContent=ct[7].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[7]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi49.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[8];
                dgplh2.textContent=name[8];
                dgpl2s1.textContent=des[8];
                dgpl2i2.src=authori[8];
                dgpl2s2.textContent=authorn[8];
                dgpl2s3.textContent=ct[8].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[8]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi50.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[9];
                dgplh2.textContent=name[9];
                dgpl2s1.textContent=des[9];
                dgpl2i2.src=authori[9];
                dgpl2s2.textContent=authorn[9];
                dgpl2s3.textContent=ct[9].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[9]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
    })
    g7.addEventListener('click',()=>{
        resetAll1();
        g7.style.color='rgb(213, 49, 49)';
        dg7.classList.add('content-active');
        let di21=document.getElementById('di21');
        let di22=document.getElementById('di22');
        let di23=document.getElementById('di23');
        let di24=document.getElementById('di24');
        let di25=document.getElementById('di25');
        let di26=document.getElementById('di26');
        let di27=document.getElementById('di27');
        let di28=document.getElementById('di28');
        let di29=document.getElementById('di29');
        let di30=document.getElementById('di30');
        let dn21=document.getElementById('dn21');
        let dn22=document.getElementById('dn22');
        let dn23=document.getElementById('dn23');
        let dn24=document.getElementById('dn24');
        let dn25=document.getElementById('dn25');
        let dn26=document.getElementById('dn26');
        let dn27=document.getElementById('dn27');
        let dn28=document.getElementById('dn28');
        let dn29=document.getElementById('dn29');
        let dn30=document.getElementById('dn30');
        let da21=document.getElementById('da21');
        let da22=document.getElementById('da22');
        let da23=document.getElementById('da23');
        let da24=document.getElementById('da24');
        let da25=document.getElementById('da25');
        let da26=document.getElementById('da26');
        let da27=document.getElementById('da27');
        let da28=document.getElementById('da28');
        let da29=document.getElementById('da29');
        let da30=document.getElementById('da30');
        let dau21=document.getElementById('dau21');
        let dau22=document.getElementById('dau22');
        let dau23=document.getElementById('dau23');
        let dau24=document.getElementById('dau24');
        let dau25=document.getElementById('dau25');
        let dau26=document.getElementById('dau26');
        let dau27=document.getElementById('dau27');
        let dau28=document.getElementById('dau28');
        let dau29=document.getElementById('dau29');
        let dau30=document.getElementById('dau30');
        let dal21=document.getElementById('dal21');
        let dal22=document.getElementById('dal22');
        let dal23=document.getElementById('dal23');
        let dal24=document.getElementById('dal24');
        let dal25=document.getElementById('dal25');
        let dal26=document.getElementById('dal26');
        let dal27=document.getElementById('dal27');
        let dal28=document.getElementById('dal28');
        let dal29=document.getElementById('dal29');
        let dal30=document.getElementById('dal30');
        let dt21=document.getElementById('dt21');
        let dt22=document.getElementById('dt22');
        let dt23=document.getElementById('dt23');
        let dt24=document.getElementById('dt24');
        let dt25=document.getElementById('dt25');
        let dt26=document.getElementById('dt26');
        let dt27=document.getElementById('dt27');
        let dt28=document.getElementById('dt28');
        let dt29=document.getElementById('dt29');
        let dt30=document.getElementById('dt30');
        let i_=[di21,di22,di23,di24,di25,di26,di27,di28,di29,di30];
        let n=[dn21,dn22,dn23,dn24,dn25,dn26,dn27,dn28,dn29,dn30];
        let a=[da21,da22,da23,da24,da25,da26,da27,da28,da29,da30];
        let au=[dau21,dau22,dau23,dau24,dau25,dau26,dau27,dau28,dau29,dau30];
        let al=[dal21,dal22,dal23,dal24,dal25,dal26,dal27,dal28,dal29,dal30];
        let t=[dt21,dt22,dt23,dt24,dt25,dt26,dt27,dt28,dt29,dt30];

        let dgi51=document.getElementById('dgi51');
        let dgp51=document.getElementById('dgp51');
        let dgp512=document.getElementById('dgp512');
        let dgi52=document.getElementById('dgi52');
        let dgp5_2=document.getElementById('dgp5_2');
        let dgp522=document.getElementById('dgp522');
        let dgi53=document.getElementById('dgi53');
        let dgp53=document.getElementById('dgp53');
        let dgp532=document.getElementById('dgp532');
        let dgi54=document.getElementById('dgi54');
        let dgp54=document.getElementById('dgp54');
        let dgp542=document.getElementById('dgp542');
        let dgi55=document.getElementById('dgi55');
        let dgp55=document.getElementById('dgp55');
        let dgp552=document.getElementById('dgp552');
        let dgi56=document.getElementById('dgi56');
        let dgp56=document.getElementById('dgp56');
        let dgp562=document.getElementById('dgp562');
        let dgi57=document.getElementById('dgi57');
        let dgp57=document.getElementById('dgp57');
        let dgp572=document.getElementById('dgp572');
        let dgi58=document.getElementById('dgi58');
        let dgp58=document.getElementById('dgp58');
        let dgp582=document.getElementById('dgp582');
        let dgi59=document.getElementById('dgi59');
        let dgp59=document.getElementById('dgp59');
        let dgp592=document.getElementById('dgp592');
        let dgi60=document.getElementById('dgi60');
        let dgp60=document.getElementById('dgp60');
        let dgp602=document.getElementById('dgp602');
        let dgi=[dgi51,dgi52,dgi53,dgi54,dgi55,dgi56,dgi57,dgi58,dgi59,dgi60];
        let dgp_1=[dgp51,dgp5_2,dgp53,dgp54,dgp55,dgp56,dgp57,dgp58,dgp59,dgp60];
        let dgp_2=[dgp512,dgp522,dgp532,dgp542,dgp552,dgp562,dgp572,dgp582,dgp592,dgp602]

        let dgpl2i1=document.getElementById('dgpl2i1');
        let dgplh2=document.getElementById('dgplh2');
        let dgpl2s1=document.getElementById('dgpl2s1');
        let dgpl2i2=document.getElementById('dgpl2i2');
        let dgpl2s2=document.getElementById('dgpl2s2');
        let dgpl2s3=document.getElementById('dgpl2s3');
        let did=[];
        let ci=[];
        let des=[];
        let name=[];
        let authori=[];
        let authorn=[];
        let ct=[];
        fetch('http://localhost:3000/top/playlist/highquality?cat=轻音乐&limit=10')
        .then(res=>res.json())
        .then(res=>{
            for(let j=0;j<10;j++){
                ci[j]=res.playlists[j].coverImgUrl;
                des[j]=res.playlists[j].description;
                name[j]=res.playlists[j].name;
                authori[j]=res.playlists[j].creator.avatarUrl;
                authorn[j]=res.playlists[j].creator.nickname;
                ct[j]=res.playlists[j].createTime;
                ct[j]=new Date(ct[j]);
                let p=res.playlists[j].playCount;
                dgp_2[j].textContent=formatCount(p);
                dgi[j].src=ci[j];
                dgp_1[j].textContent=name[j];
                
                let id=res.playlists[j].id;
                
                did[j]=id;
                }               
            });
            dgi51.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[0];
                dgplh2.textContent=name[0];
                dgpl2s1.textContent=des[0];
                dgpl2i2.src=authori[0];
                dgpl2s2.textContent=authorn[0];
                dgpl2s3.textContent=ct[0].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[0]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi52.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[1];
                dgplh2.textContent=name[1];
                dgpl2s1.textContent=des[1];
                dgpl2i2.src=authori[1];
                dgpl2s2.textContent=authorn[1];
                dgpl2s3.textContent=ct[1].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[1]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi53.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[2];
                dgplh2.textContent=name[2];
                dgpl2s1.textContent=des[2];
                dgpl2i2.src=authori[2];
                dgpl2s2.textContent=authorn[2];
                dgpl2s3.textContent=ct[2].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[2]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi54.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[3];
                dgplh2.textContent=name[3];
                dgpl2s1.textContent=des[3];
                dgpl2i2.src=authori[3];
                dgpl2s2.textContent=authorn[3];
                dgpl2s3.textContent=ct[3].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[3]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi55.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[4];
                dgplh2.textContent=name[4];
                dgpl2s1.textContent=des[4];
                dgpl2i2.src=authori[4];
                dgpl2s2.textContent=authorn[4];
                dgpl2s3.textContent=ct[4].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[4]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi56.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[5];
                dgplh2.textContent=name[5];
                dgpl2s1.textContent=des[5];
                dgpl2i2.src=authori[5];
                dgpl2s2.textContent=authorn[5];
                dgpl2s3.textContent=ct[5].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[5]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi57.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[6];
                dgplh2.textContent=name[6];
                dgpl2s1.textContent=des[6];
                dgpl2i2.src=authori[6];
                dgpl2s2.textContent=authorn[6];
                dgpl2s3.textContent=ct[6].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[6]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi58.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[7];
                dgplh2.textContent=name[7];
                dgpl2s1.textContent=des[7];
                dgpl2i2.src=authori[7];
                dgpl2s2.textContent=authorn[7];
                dgpl2s3.textContent=ct[7].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[7]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi59.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[8];
                dgplh2.textContent=name[8];
                dgpl2s1.textContent=des[8];
                dgpl2i2.src=authori[8];
                dgpl2s2.textContent=authorn[8];
                dgpl2s3.textContent=ct[8].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[8]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
            dgi60.addEventListener('click',()=>{
                resetAll1()
                dgpl2.classList.add('content-active');
                dgpl2i1.src=ci[9];
                dgplh2.textContent=name[9];
                dgpl2s1.textContent=des[9];
                dgpl2i2.src=authori[9];
                dgpl2s2.textContent=authorn[9];
                dgpl2s3.textContent=ct[9].toLocaleString();
                fetch(`http://localhost:3000/playlist/track/all?id=${did[9]}&limit=10&offset=1`)
                .then(list => list.json())
                .then(list => {
                    for(let i=0;i<10;i++){
                        fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                        .then(res => res.json())
                        .then(res => {
                            au[i].src=res.data;
                        })
                        .catch(err => console.error(err));
                        n[i].textContent=list.songs[i].name;
                        a[i].textContent=list.songs[i].ar[0].name;
                        i_[i].src=list.songs[i].al.picUrl
                        let time=list.songs[i].dt;
                        let min=Math.trunc(Math.trunc(time/1000)/60);
                        let sec=Math.trunc(time/1000)%60;
                        if(sec<10){
                            t[i].textContent=`0${min}:0${sec}`;
                        }
                        else{
                            t[i].textContent=`0${min}:${sec}`;
                        }   
                        al[i].textContent=list.songs[i].al.name;
                    }
                })  
                .catch(err => console.log(err));
            })
    })

    //推荐
    
    gi1.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl1.classList.add('content-active');
        let i71=document.getElementById('i71');
        let n71=document.getElementById('n71');
        let a71=document.getElementById('a71');
        let au71=document.getElementById('au71');
        let al71=document.getElementById('al71');
        let t71=document.getElementById('t71');
        let i72=document.getElementById('i72');
        let n72=document.getElementById('n72');
        let a72=document.getElementById('a72');
        let au72=document.getElementById('au72');
        let al72=document.getElementById('al72');
        let t72=document.getElementById('t72');
        let i73=document.getElementById('i73');
        let n73=document.getElementById('n73');
        let a73=document.getElementById('a73');
        let au73=document.getElementById('au73');
        let al73=document.getElementById('al73');
        let t73=document.getElementById('t73');
        let i74=document.getElementById('i74');
        let n74=document.getElementById('n74');
        let a74=document.getElementById('a74');
        let au74=document.getElementById('au74');
        let al74=document.getElementById('al74');
        let t74=document.getElementById('t74');
        let i75=document.getElementById('i75');
        let n75=document.getElementById('n75');
        let a75=document.getElementById('a75');
        let au75=document.getElementById('au75');
        let al75=document.getElementById('al75');
        let t75=document.getElementById('t75');
        let i76=document.getElementById('i76');
        let n76=document.getElementById('n76');
        let a76=document.getElementById('a76');
        let au76=document.getElementById('au76');
        let al76=document.getElementById('al76');
        let t76=document.getElementById('t76');
        let i77=document.getElementById('i77');
        let n77=document.getElementById('n77');
        let a77=document.getElementById('a77');
        let au77=document.getElementById('au77');
        let al77=document.getElementById('al77');
        let t77=document.getElementById('t77');
        let i78=document.getElementById('i78');
        let n78=document.getElementById('n78');
        let a78=document.getElementById('a78');
        let au78=document.getElementById('au78');
        let al78=document.getElementById('al78');
        let t78=document.getElementById('t78');
        let i79=document.getElementById('i79');
        let n79=document.getElementById('n79');
        let a79=document.getElementById('a79');
        let au79=document.getElementById('au79');
        let al79=document.getElementById('al79');
        let t79=document.getElementById('t79');
        let i80=document.getElementById('i80');
        let n80=document.getElementById('n80');
        let a80=document.getElementById('a80');
        let au80=document.getElementById('au80');
        let al80=document.getElementById('al80');
        let t80=document.getElementById('t80');
        let i_=[i71,i72,i73,i74,i75,i76,i77,i78,i79,i80];
        let n=[n71,n72,n73,n74,n75,n76,n77,n78,n79,n80];
        let a=[a71,a72,a73,a74,a75,a76,a77,a78,a79,a80];
        let au=[au71,au72,au73,au74,au75,au76,au77,au78,au79,au80];
        let al=[al71,al72,al73,al74,al75,al76,al77,al78,al79,al80];
        let t=[t71,t72,t73,t74,t75,t76,t77,t78,t79,t80];
        fetch(`http://localhost:3000/playlist/track/all?id=13633611594&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => console.error(err));
    });

    gi2.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl2.classList.add('content-active');
        let i81=document.getElementById('i81');
        let n81=document.getElementById('n81');
        let a81=document.getElementById('a81');
        let au81=document.getElementById('au81');
        let al81=document.getElementById('al81');
        let t81=document.getElementById('t81');
        let i82=document.getElementById('i82');
        let n82=document.getElementById('n82');
        let a82=document.getElementById('a82');
        let au82=document.getElementById('au82');
        let al82=document.getElementById('al82');
        let t82=document.getElementById('t82');
        let i83=document.getElementById('i83');
        let n83=document.getElementById('n83');
        let a83=document.getElementById('a83');
        let au83=document.getElementById('au83');
        let al83=document.getElementById('al83');
        let t83=document.getElementById('t83');
        let i84=document.getElementById('i84');
        let n84=document.getElementById('n84');
        let a84=document.getElementById('a84');
        let au84=document.getElementById('au84');
        let al84=document.getElementById('al84');
        let t84=document.getElementById('t84');
        let i85=document.getElementById('i85');
        let n85=document.getElementById('n85');
        let a85=document.getElementById('a85');
        let au85=document.getElementById('au85');
        let al85=document.getElementById('al85');
        let t85=document.getElementById('t85');
        let i86=document.getElementById('i86');
        let n86=document.getElementById('n86');
        let a86=document.getElementById('a86');
        let au86=document.getElementById('au86');
        let al86=document.getElementById('al86');
        let t86=document.getElementById('t86');
        let i87=document.getElementById('i87');
        let n87=document.getElementById('n87');
        let a87=document.getElementById('a87');
        let au87=document.getElementById('au87');
        let al87=document.getElementById('al87');
        let t87=document.getElementById('t87');
        let i88=document.getElementById('i88');
        let n88=document.getElementById('n88');
        let a88=document.getElementById('a88');
        let au88=document.getElementById('au88');
        let al88=document.getElementById('al88');
        let t88=document.getElementById('t88');
        let i89=document.getElementById('i89');
        let n89=document.getElementById('n89');
        let a89=document.getElementById('a89');
        let au89=document.getElementById('au89');
        let al89=document.getElementById('al89');
        let t89=document.getElementById('t89');
        let i90=document.getElementById('i90');
        let n90=document.getElementById('n90');
        let a90=document.getElementById('a90');
        let au90=document.getElementById('au90');
        let al90=document.getElementById('al90');
        let t90=document.getElementById('t90');
        let i_=[i81,i82,i83,i84,i85,i86,i87,i88,i89,i90];
        let n=[n81,n82,n83,n84,n85,n86,n87,n88,n89,n90];
        let a=[a81,a82,a83,a84,a85,a86,a87,a88,a89,a90];
        let au=[au81,au82,au83,au84,au85,au86,au87,au88,au89,au90];
        let al=[al81,al82,al83,al84,al85,al86,al87,al88,al89,al90];
        let t=[t81,t82,t83,t84,t85,t86,t87,t88,t89,t90];
        fetch(`http://localhost:3000/playlist/track/all?id=14392645331&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi3.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl3.classList.add('content-active');
        let i91=document.getElementById('i91');
        let n91=document.getElementById('n91');
        let a91=document.getElementById('a91');
        let au91=document.getElementById('au91');
        let al91=document.getElementById('al91');
        let t91=document.getElementById('t91');
        let i92=document.getElementById('i92');
        let n92=document.getElementById('n92');
        let a92=document.getElementById('a92');
        let au92=document.getElementById('au92');
        let al92=document.getElementById('al92');
        let t92=document.getElementById('t92');
        let i93=document.getElementById('i93');
        let n93=document.getElementById('n93');
        let a93=document.getElementById('a93');
        let au93=document.getElementById('au93');
        let al93=document.getElementById('al93');
        let t93=document.getElementById('t93');
        let i94=document.getElementById('i94');
        let n94=document.getElementById('n94');
        let a94=document.getElementById('a94');
        let au94=document.getElementById('au94');
        let al94=document.getElementById('al94');
        let t94=document.getElementById('t94');
        let i95=document.getElementById('i95');
        let n95=document.getElementById('n95');
        let a95=document.getElementById('a95');
        let au95=document.getElementById('au95');
        let al95=document.getElementById('al95');
        let t95=document.getElementById('t95');
        let i96=document.getElementById('i96');
        let n96=document.getElementById('n96');
        let a96=document.getElementById('a96');
        let au96=document.getElementById('au96');
        let al96=document.getElementById('al96');
        let t96=document.getElementById('t96');
        let i97=document.getElementById('i97');
        let n97=document.getElementById('n97');
        let a97=document.getElementById('a97');
        let au97=document.getElementById('au97');
        let al97=document.getElementById('al97');
        let t97=document.getElementById('t97');
        let i98=document.getElementById('i98');
        let n98=document.getElementById('n98');
        let a98=document.getElementById('a98');
        let au98=document.getElementById('au98');
        let al98=document.getElementById('al98');
        let t98=document.getElementById('t98');
        let i99=document.getElementById('i99');
        let n99=document.getElementById('n99');
        let a99=document.getElementById('a99');
        let au99=document.getElementById('au99');
        let al99=document.getElementById('al99');
        let t99=document.getElementById('t99');
        let i100=document.getElementById('i100');
        let n100=document.getElementById('n100');
        let a100=document.getElementById('a100');
        let au100=document.getElementById('au100');
        let al100=document.getElementById('al100');
        let t100=document.getElementById('t100');
        let i_=[i91,i92,i93,i94,i95,i96,i97,i98,i99,i100];
        let n=[n91,n92,n93,n94,n95,n96,n97,n98,n99,n100];
        let a=[a91,a92,a93,a94,a95,a96,a97,a98,a99,a100];
        let au=[au91,au92,au93,au94,au95,au96,au97,au98,au99,au100];
        let al=[al91,al92,al93,al94,al95,al96,al97,al98,al99,al100];
        let t=[t91,t92,t93,t94,t95,t96,t97,t98,t99,t100];
        fetch(`http://localhost:3000/playlist/track/all?id=126947268&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err =>alert.error(err));
    });

    gi4.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl4.classList.add('content-active');
        let i101=document.getElementById('i101');
        let n101=document.getElementById('n101');
        let a101=document.getElementById('a101');
        let au101=document.getElementById('au101');
        let al101=document.getElementById('al101');
        let t101=document.getElementById('t101');
        let i102=document.getElementById('i102');
        let n102=document.getElementById('n102');
        let a102=document.getElementById('a102');
        let au102=document.getElementById('au102');
        let al102=document.getElementById('al102');
        let t102=document.getElementById('t102');
        let i103=document.getElementById('i103');
        let n103=document.getElementById('n103');
        let a103=document.getElementById('a103');
        let au103=document.getElementById('au103');
        let al103=document.getElementById('al103');
        let t103=document.getElementById('t103');
        let i104=document.getElementById('i104');
        let n104=document.getElementById('n104');
        let a104=document.getElementById('a104');
        let au104=document.getElementById('au104');
        let al104=document.getElementById('al104');
        let t104=document.getElementById('t104');
        let i105=document.getElementById('i105');
        let n105=document.getElementById('n105');
        let a105=document.getElementById('a105');
        let au105=document.getElementById('au105');
        let al105=document.getElementById('al105');
        let t105=document.getElementById('t105');
        let i106=document.getElementById('i106');
        let n106=document.getElementById('n106');
        let a106=document.getElementById('a106');
        let au106=document.getElementById('au106');
        let al106=document.getElementById('al106');
        let t106=document.getElementById('t106');
        let i107=document.getElementById('i107');
        let n107=document.getElementById('n107');
        let a107=document.getElementById('a107');
        let au107=document.getElementById('au107');
        let al107=document.getElementById('al107');
        let t107=document.getElementById('t107');
        let i108=document.getElementById('i108');
        let n108=document.getElementById('n108');
        let a108=document.getElementById('a108');
        let au108=document.getElementById('au108');
        let al108=document.getElementById('al108');
        let t108=document.getElementById('t108');
        let i109=document.getElementById('i109');
        let n109=document.getElementById('n109');
        let a109=document.getElementById('a109');
        let au109=document.getElementById('au109');
        let al109=document.getElementById('al109');
        let t109=document.getElementById('t109');
        let i110=document.getElementById('i110');
        let n110=document.getElementById('n110');
        let a110=document.getElementById('a110');
        let au110=document.getElementById('au110');
        let al110=document.getElementById('al110');
        let t110=document.getElementById('t110');
        let i_=[i101,i102,i103,i104,i105,i106,i107,i108,i109,i110];
        let n=[n101,n102,n103,n104,n105,n106,n107,n108,n109,n110];
        let a=[a101,a102,a103,a104,a105,a106,a107,a108,a109,a110];
        let au=[au101,au102,au103,au104,au105,au106,au107,au108,au109,au110];
        let al=[al101,al102,al103,al104,al105,al106,al107,al108,al109,al110];
        let t=[t101,t102,t103,t104,t105,t106,t107,t108,t109,t110];
        fetch(`http://localhost:3000/playlist/track/all?id=17532923392&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi5.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl5.classList.add('content-active');
        let i111=document.getElementById('i111');
        let n111=document.getElementById('n111');
        let a111=document.getElementById('a111');
        let au111=document.getElementById('au111');
        let al111=document.getElementById('al111');
        let t111=document.getElementById('t111');
        let i112=document.getElementById('i112');
        let n112=document.getElementById('n112');
        let a112=document.getElementById('a112');
        let au112=document.getElementById('au112');
        let al112=document.getElementById('al112');
        let t112=document.getElementById('t112');
        let i113=document.getElementById('i113');
        let n113=document.getElementById('n113');
        let a113=document.getElementById('a113');
        let au113=document.getElementById('au113');
        let al113=document.getElementById('al113');
        let t113=document.getElementById('t113');
        let i114=document.getElementById('i114');
        let n114=document.getElementById('n114');
        let a114=document.getElementById('a114');
        let au114=document.getElementById('au114');
        let al114=document.getElementById('al114');
        let t114=document.getElementById('t114');
        let i115=document.getElementById('i115');
        let n115=document.getElementById('n115');
        let a115=document.getElementById('a115');
        let au115=document.getElementById('au115');
        let al115=document.getElementById('al115');
        let t115=document.getElementById('t115');
        let i116=document.getElementById('i116');
        let n116=document.getElementById('n116');
        let a116=document.getElementById('a116');
        let au116=document.getElementById('au116');
        let al116=document.getElementById('al116');
        let t116=document.getElementById('t116');
        let i117=document.getElementById('i117');
        let n117=document.getElementById('n117');
        let a117=document.getElementById('a117');
        let au117=document.getElementById('au117');
        let al117=document.getElementById('al117');
        let t117=document.getElementById('t117');
        let i118=document.getElementById('i118');
        let n118=document.getElementById('n118');
        let t118=document.getElementById('t118');
        let a118=document.getElementById('a118');
        let au118=document.getElementById('au118');
        let al118=document.getElementById('al118');
        let i119=document.getElementById('i119');
        let n119=document.getElementById('n119');
        let a119=document.getElementById('a119');
        let au119=document.getElementById('au119');
        let al119=document.getElementById('al119');
        let t119=document.getElementById('t119');
        let i120=document.getElementById('i120');
        let n120=document.getElementById('n120');
        let a120=document.getElementById('a120');
        let au120=document.getElementById('au120');
        let al120=document.getElementById('al120');
        let t120=document.getElementById('t120');
        let i_=[i111,i112,i113,i114,i115,i116,i117,i118,i119,i120];
        let n=[n111,n112,n113,n114,n115,n116,n117,n118,n119,n120];
        let a=[a111,a112,a113,a114,a115,a116,a117,a118,a119,a120];
        let au=[au111,au112,au113,au114,au115,au116,au117,au118,au119,au120];
        let al=[al111,al112,al113,al114,al115,al116,al117,al118,al119,al120];
        let t=[t111,t112,t113,t114,t115,t116,t117,t118,t119,t120];
        fetch(`http://localhost:3000/playlist/track/all?id=2780667664&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi6.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl6.classList.add('content-active');
        let i101=document.getElementById('i121');
        let n101=document.getElementById('n121');
        let a101=document.getElementById('a121');
        let au101=document.getElementById('au121');
        let al101=document.getElementById('al121');
        let t101=document.getElementById('t121');
        let i102=document.getElementById('i122');
        let n102=document.getElementById('n122');
        let a102=document.getElementById('a122');
        let au102=document.getElementById('au122');
        let al102=document.getElementById('al122');
        let t102=document.getElementById('t122');
        let i103=document.getElementById('i123');
        let n103=document.getElementById('n123');
        let a103=document.getElementById('a123');
        let au103=document.getElementById('au123');
        let al103=document.getElementById('al123');
        let t103=document.getElementById('t123');
        let i104=document.getElementById('i124');
        let n104=document.getElementById('n124');
        let a104=document.getElementById('a124');
        let au104=document.getElementById('au124');
        let al104=document.getElementById('al124');
        let t104=document.getElementById('t124');
        let i105=document.getElementById('i125');
        let n105=document.getElementById('n125');
        let a105=document.getElementById('a125');
        let au105=document.getElementById('au125');
        let al105=document.getElementById('al125');
        let t105=document.getElementById('t125');
        let i106=document.getElementById('i126');
        let n106=document.getElementById('n126');
        let a106=document.getElementById('a126');
        let au106=document.getElementById('au126');
        let al106=document.getElementById('al126');
        let t106=document.getElementById('t126');
        let i107=document.getElementById('i127');
        let n107=document.getElementById('n127');
        let a107=document.getElementById('a127');
        let au107=document.getElementById('au127');
        let al107=document.getElementById('al127');
        let t107=document.getElementById('t127');
        let i108=document.getElementById('i128');
        let n108=document.getElementById('n128');
        let a108=document.getElementById('a128');
        let au108=document.getElementById('au128');
        let al108=document.getElementById('al128');
        let t108=document.getElementById('t128');
        let i109=document.getElementById('i129');
        let n109=document.getElementById('n129');
        let a109=document.getElementById('a129');
        let au109=document.getElementById('au129');
        let al109=document.getElementById('al129');
        let t109=document.getElementById('t129');
        let i110=document.getElementById('i130');
        let n110=document.getElementById('n130');
        let a110=document.getElementById('a130');
        let au110=document.getElementById('au130');
        let al110=document.getElementById('al130');
        let t110=document.getElementById('t130');
        let i_=[i101,i102,i103,i104,i105,i106,i107,i108,i109,i110];
        let n=[n101,n102,n103,n104,n105,n106,n107,n108,n109,n110];
        let a=[a101,a102,a103,a104,a105,a106,a107,a108,a109,a110];
        let au=[au101,au102,au103,au104,au105,au106,au107,au108,au109,au110];
        let al=[al101,al102,al103,al104,al105,al106,al107,al108,al109,al110];
        let t=[t101,t102,t103,t104,t105,t106,t107,t108,t109,t110];
        fetch(`http://localhost:3000/playlist/track/all?id=1980837671&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi7.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl7.classList.add('content-active');
        let i101=document.getElementById('i131');
        let n101=document.getElementById('n131');
        let a101=document.getElementById('a131');
        let au101=document.getElementById('au131');
        let al101=document.getElementById('al131');
        let t101=document.getElementById('t131');
        let i102=document.getElementById('i132');
        let n102=document.getElementById('n132');
        let a102=document.getElementById('a132');
        let au102=document.getElementById('au132');
        let al102=document.getElementById('al132');
        let t102=document.getElementById('t132');
        let i103=document.getElementById('i133');
        let n103=document.getElementById('n133');
        let a103=document.getElementById('a133');
        let au103=document.getElementById('au133');
        let al103=document.getElementById('al133');
        let t103=document.getElementById('t133');
        let i104=document.getElementById('i134');
        let n104=document.getElementById('n134');
        let a104=document.getElementById('a134');
        let au104=document.getElementById('au134');
        let al104=document.getElementById('al134');
        let t104=document.getElementById('t134');
        let i105=document.getElementById('i135');
        let n105=document.getElementById('n135');
        let a105=document.getElementById('a135');
        let au105=document.getElementById('au135');
        let al105=document.getElementById('al135');
        let t105=document.getElementById('t135');
        let i106=document.getElementById('i136');
        let n106=document.getElementById('n136');
        let a106=document.getElementById('a136');
        let au106=document.getElementById('au136');
        let al106=document.getElementById('al136');
        let t106=document.getElementById('t136');
        let i107=document.getElementById('i137');
        let n107=document.getElementById('n137');
        let a107=document.getElementById('a137');
        let au107=document.getElementById('au137');
        let al107=document.getElementById('al137');
        let t107=document.getElementById('t137');
        let i108=document.getElementById('i138');
        let n108=document.getElementById('n138');
        let a108=document.getElementById('a138');
        let au108=document.getElementById('au138');
        let al108=document.getElementById('al138');
        let t108=document.getElementById('t138');
        let i109=document.getElementById('i139');
        let n109=document.getElementById('n139');
        let a109=document.getElementById('a139');
        let au109=document.getElementById('au139');
        let al109=document.getElementById('al139');
        let t109=document.getElementById('t139');
        let i110=document.getElementById('i140');
        let n110=document.getElementById('n140');
        let a110=document.getElementById('a140');
        let au110=document.getElementById('au140');
        let al110=document.getElementById('al140');
        let t110=document.getElementById('t140');
        let i_=[i101,i102,i103,i104,i105,i106,i107,i108,i109,i110];
        let n=[n101,n102,n103,n104,n105,n106,n107,n108,n109,n110];
        let a=[a101,a102,a103,a104,a105,a106,a107,a108,a109,a110];
        let au=[au101,au102,au103,au104,au105,au106,au107,au108,au109,au110];
        let al=[al101,al102,al103,al104,al105,al106,al107,al108,al109,al110];
        let t=[t101,t102,t103,t104,t105,t106,t107,t108,t109,t110];
        fetch(`http://localhost:3000/playlist/track/all?id=38579505&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi8.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl8.classList.add('content-active');
        let i101=document.getElementById('i141');
        let n101=document.getElementById('n141');
        let a101=document.getElementById('a141');
        let au101=document.getElementById('au141');
        let al101=document.getElementById('al141');
        let t101=document.getElementById('t141');
        let i102=document.getElementById('i142');
        let n102=document.getElementById('n142');
        let a102=document.getElementById('a142');
        let au102=document.getElementById('au142');
        let al102=document.getElementById('al142');
        let t102=document.getElementById('t142');
        let i103=document.getElementById('i143');
        let n103=document.getElementById('n143');
        let a103=document.getElementById('a143');
        let au103=document.getElementById('au143');
        let al103=document.getElementById('al143');
        let t103=document.getElementById('t143');
        let i104=document.getElementById('i144');
        let n104=document.getElementById('n144');
        let a104=document.getElementById('a144');
        let au104=document.getElementById('au144');
        let al104=document.getElementById('al144');
        let t104=document.getElementById('t144');
        let i105=document.getElementById('i145');
        let n105=document.getElementById('n145');
        let a105=document.getElementById('a145');
        let au105=document.getElementById('au145');
        let al105=document.getElementById('al145');
        let t105=document.getElementById('t145');
        let i106=document.getElementById('i146');
        let n106=document.getElementById('n146');
        let a106=document.getElementById('a146');
        let au106=document.getElementById('au146');
        let al106=document.getElementById('al146');
        let t106=document.getElementById('t146');
        let i107=document.getElementById('i147');
        let n107=document.getElementById('n147');
        let a107=document.getElementById('a147');
        let au107=document.getElementById('au147');
        let al107=document.getElementById('al147');
        let t107=document.getElementById('t147');
        let i108=document.getElementById('i148');
        let n108=document.getElementById('n148');
        let a108=document.getElementById('a148');
        let au108=document.getElementById('au148');
        let al108=document.getElementById('al148');
        let t108=document.getElementById('t148');
        let i109=document.getElementById('i149');
        let n109=document.getElementById('n149');
        let a109=document.getElementById('a149');
        let au109=document.getElementById('au149');
        let al109=document.getElementById('al149');
        let t109=document.getElementById('t149');
        let i110=document.getElementById('i150');
        let n110=document.getElementById('n150');
        let a110=document.getElementById('a150');
        let au110=document.getElementById('au150');
        let al110=document.getElementById('al150');
        let t110=document.getElementById('t150');
        let i_=[i101,i102,i103,i104,i105,i106,i107,i108,i109,i110];
        let n=[n101,n102,n103,n104,n105,n106,n107,n108,n109,n110];
        let a=[a101,a102,a103,a104,a105,a106,a107,a108,a109,a110];
        let au=[au101,au102,au103,au104,au105,au106,au107,au108,au109,au110];
        let al=[al101,al102,al103,al104,al105,al106,al107,al108,al109,al110];
        let t=[t101,t102,t103,t104,t105,t106,t107,t108,t109,t110];
        fetch(`http://localhost:3000/playlist/track/all?id=578963016&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi9.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl9.classList.add('content-active');
        let i101=document.getElementById('i151');
        let n101=document.getElementById('n151');
        let a101=document.getElementById('a151');
        let au101=document.getElementById('au151');
        let al101=document.getElementById('al151');
        let t101=document.getElementById('t151');
        let i102=document.getElementById('i152');
        let n102=document.getElementById('n152');
        let a102=document.getElementById('a152');
        let au102=document.getElementById('au152');
        let al102=document.getElementById('al152');
        let t102=document.getElementById('t152');
        let i103=document.getElementById('i153');
        let n103=document.getElementById('n153');
        let a103=document.getElementById('a153');
        let au103=document.getElementById('au153');
        let al103=document.getElementById('al153');
        let t103=document.getElementById('t153');
        let i104=document.getElementById('i154');
        let n104=document.getElementById('n154');
        let a104=document.getElementById('a154');
        let au104=document.getElementById('au154');
        let al104=document.getElementById('al154');
        let t104=document.getElementById('t154');
        let i105=document.getElementById('i155');
        let n105=document.getElementById('n155');
        let a105=document.getElementById('a155');
        let au105=document.getElementById('au155');
        let al105=document.getElementById('al155');
        let t105=document.getElementById('t155');
        let i106=document.getElementById('i156');
        let n106=document.getElementById('n156');
        let a106=document.getElementById('a156');
        let au106=document.getElementById('au156');
        let al106=document.getElementById('al156');
        let t106=document.getElementById('t156');
        let i107=document.getElementById('i157');
        let n107=document.getElementById('n157');
        let a107=document.getElementById('a157');
        let au107=document.getElementById('au157');
        let al107=document.getElementById('al157');
        let t107=document.getElementById('t157');
        let i108=document.getElementById('i158');
        let n108=document.getElementById('n158');
        let a108=document.getElementById('a158');
        let au108=document.getElementById('au158');
        let al108=document.getElementById('al158');
        let t108=document.getElementById('t158');
        let i109=document.getElementById('i159');
        let n109=document.getElementById('n159');
        let a109=document.getElementById('a159');
        let au109=document.getElementById('au159');
        let al109=document.getElementById('al159');
        let t109=document.getElementById('t159');
        let i110=document.getElementById('i160');
        let n110=document.getElementById('n160');
        let a110=document.getElementById('a160');
        let au110=document.getElementById('au160');
        let al110=document.getElementById('al160');
        let t110=document.getElementById('t160');
        let i_=[i101,i102,i103,i104,i105,i106,i107,i108,i109,i110];
        let n=[n101,n102,n103,n104,n105,n106,n107,n108,n109,n110];
        let a=[a101,a102,a103,a104,a105,a106,a107,a108,a109,a110];
        let au=[au101,au102,au103,au104,au105,au106,au107,au108,au109,au110];
        let al=[al101,al102,al103,al104,al105,al106,al107,al108,al109,al110];
        let t=[t101,t102,t103,t104,t105,t106,t107,t108,t109,t110];
        fetch(`http://localhost:3000/playlist/track/all?id=10050354528&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    gi10.addEventListener('click',()=>{
        dg.forEach(DG=> {
            DG.classList.remove('content-active');
        });
        Pl.forEach(pl=>{
            pl.classList.remove('content-active');
        });
        pl10.classList.add('content-active');
        let i101=document.getElementById('i161');
        let n101=document.getElementById('n161');
        let a101=document.getElementById('a161');
        let au101=document.getElementById('au161');
        let al101=document.getElementById('al161');
        let t101=document.getElementById('t161');
        let i102=document.getElementById('i162');
        let n102=document.getElementById('n162');
        let a102=document.getElementById('a162');
        let au102=document.getElementById('au162');
        let al102=document.getElementById('al162');
        let t102=document.getElementById('t162');
        let i103=document.getElementById('i163');
        let n103=document.getElementById('n163');
        let a103=document.getElementById('a163');
        let au103=document.getElementById('au163');
        let al103=document.getElementById('al163');
        let t103=document.getElementById('t163');
        let i104=document.getElementById('i164');
        let n104=document.getElementById('n164');
        let a104=document.getElementById('a164');
        let au104=document.getElementById('au164');
        let al104=document.getElementById('al164');
        let t104=document.getElementById('t164');
        let i105=document.getElementById('i165');
        let n105=document.getElementById('n165');
        let a105=document.getElementById('a165');
        let au105=document.getElementById('au165');
        let al105=document.getElementById('al165');
        let t105=document.getElementById('t165');
        let i106=document.getElementById('i166');
        let n106=document.getElementById('n166');
        let a106=document.getElementById('a166');
        let au106=document.getElementById('au166');
        let al106=document.getElementById('al166');
        let t106=document.getElementById('t166');
        let i107=document.getElementById('i167');
        let n107=document.getElementById('n167');
        let a107=document.getElementById('a167');
        let au107=document.getElementById('au167');
        let al107=document.getElementById('al167');
        let t107=document.getElementById('t167');
        let i108=document.getElementById('i168');
        let n108=document.getElementById('n168');
        let a108=document.getElementById('a168');
        let au108=document.getElementById('au168');
        let al108=document.getElementById('al168');
        let t108=document.getElementById('t168');
        let i109=document.getElementById('i169');
        let n109=document.getElementById('n169');
        let a109=document.getElementById('a169');
        let au109=document.getElementById('au169');
        let al109=document.getElementById('al169');
        let t109=document.getElementById('t169');
        let i110=document.getElementById('i170');
        let n110=document.getElementById('n170');
        let a110=document.getElementById('a170');
        let au110=document.getElementById('au170');
        let al110=document.getElementById('al170');
        let t110=document.getElementById('t170');
        let i_=[i101,i102,i103,i104,i105,i106,i107,i108,i109,i110];
        let n=[n101,n102,n103,n104,n105,n106,n107,n108,n109,n110];
        let a=[a101,a102,a103,a104,a105,a106,a107,a108,a109,a110];
        let au=[au101,au102,au103,au104,au105,au106,au107,au108,au109,au110];
        let al=[al101,al102,al103,al104,al105,al106,al107,al108,al109,al110];
        let t=[t101,t102,t103,t104,t105,t106,t107,t108,t109,t110];
        fetch(`http://localhost:3000/playlist/track/all?id=7098121977&limit=10&offset=1`)
        .then(list => list.json())
        .then(list => {
            for(let i=0;i<10;i++){
                fetch(`http://localhost:3000/song/url/match?id=${list.songs[i].id}`)
                .then(res => res.json())
                .then(res => {
                    au[i].src=res.data;
                })
                .catch(err => console.error(err));
                n[i].textContent=list.songs[i].name;
                a[i].textContent=list.songs[i].ar[0].name;
                i_[i].src=list.songs[i].al.picUrl
                let time=list.songs[i].dt;
                let min=Math.trunc(Math.trunc(time/1000)/60);
                let sec=Math.trunc(time/1000)%60;
                if(sec<10){
                    t[i].textContent=`0${min}:0${sec}`;
                }
                else{
                    t[i].textContent=`0${min}:${sec}`;
                }   
                al[i].textContent=list.songs[i].al.name;
            }
        })  
        .catch(err => alert.error(err));
    });

    //轮播图
    const cBox = document.querySelector('.c-box');
    const cList = document.querySelector('.c-list');
    const cLeft = document.querySelector('.c-left');
    const cRight = document.querySelector('.c-right');
    const groupWidth = 885; 
    const totalGroups = 2; 
    let currentGroup = 0; 
    function changeGroup(targetGroup) {
        if (targetGroup < 0) targetGroup = totalGroups - 1;
        if (targetGroup >= totalGroups) targetGroup = 0;
        currentGroup = targetGroup;
        cList.style.transform = `translateX(-${currentGroup * groupWidth}px)`;
    };
    cLeft.onclick = function() {
        changeGroup(currentGroup - 1); 
    };
    cRight.onclick = function() {
        changeGroup(currentGroup + 1); 
    };
    let timer = setInterval(function() {
        changeGroup(currentGroup + 1);
    }, 3000);

    //音频播放
    let A=document.querySelectorAll('audio');
    let Ai=document.querySelectorAll('.div9');
    function stop(){
        A.forEach(A => {
            A.pause();
            A.currentTime=0;
        });
    }
    function resetAll2(){
        Ai.forEach(AI => {
            AI.classList.remove('music-playing');
        });
    }

    let currentIndex = -1; 
    let isPlaying = false; 
    let progressTimer = null;
    const progressWrap = document.querySelector('.progress-wrap');
    const progressBar = document.querySelector('.progress-bar');
    const playBtn = document.querySelector('.play-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const displayimg = document.querySelector('.displayimg');
    const displayname = document.querySelector('.displayname');
    const displayauthor = document.querySelector('.displayauthor');
    let time=document.getElementsByClassName('time')[0];
    let gtime=0;
    let second=0;
    let minute=0;
    
    Ai.forEach((aiItem, index) => {
        aiItem.addEventListener('dblclick', () => {
            if (index >= A.length) return;
            stop();
            resetAll2();
            let img=document.getElementsByClassName('displayimg')[0];
            let name=document.getElementsByClassName('displayname')[0];
            let author=document.getElementsByClassName('displayauthor')[0];
            let sauthor=aiItem.getElementsByClassName('span7')[0];
            let gtime=aiItem.getElementsByClassName('span9')[0];
            let simg=aiItem.querySelector('img');
            let sname=aiItem.querySelector('.span10 span:first-child');
            second=0;
            minute=0;
            img.src=simg.src;
            author.textContent=sauthor.textContent;
            name.textContent=sname.textContent;
            
            const timeElement = document.querySelector('.time');
            timeElement.textContent = '00:00';
            
            currentIndex = index;
            isPlaying = true;
            playBtn.textContent = '▶'; 
            progressBar.style.width = '0%';
            clearInterval(progressTimer);

            Ai[index].classList.add('music-playing');
            let audio=aiItem.querySelector('audio');

            audio.volume = currentVolume;
            audio.muted = isMuted;

            audio.play().catch(err => {
                console.error("播放失败：", err);
                alert("播放失败！浏览器要求用户交互后才能播放音频");
            });
            audio.onended = () => {
                console.log("音乐播放完毕");
                audio.currentTime=0;
                progressBar.style.width = '0%'; 
                clearInterval(progressTimer); 
                playBtn.textContent = '▶'; 
                isPlaying = false;

                const timeElement = document.querySelector('.time');
                timeElement.textContent = '00:00';
                
            };

            progressTimer = setInterval(updateProgress, 500);
            playBtn.textContent = '❙❙';
        });
    });


    //
    function formatTime(seconds) {
        if (isNaN(seconds)) seconds = 0;
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    function updateProgress() {
        if (currentIndex === -1 || !A[currentIndex]) return;
        const audio = A[currentIndex];
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        progressWrap.style.setProperty('--progress-pos', `${progressPercent}%`);

        const timeElement = document.querySelector('.time');
        timeElement.textContent = formatTime(audio.currentTime);
    }

    function togglePlayPause() {
        if (currentIndex === -1) return; 
        const audio = A[currentIndex];
        
        if (isPlaying) {
            audio.pause();
            clearInterval(progressTimer);
            playBtn.textContent = '▶'; 
        } else {
            audio.play();
            progressTimer = setInterval(updateProgress, 500);
            playBtn.textContent = '❙❙'; 
        }
        isPlaying = !isPlaying;
    }

    function playPrev() {
        if (currentIndex === -1) return;
        currentIndex = (currentIndex - 1 + A.length) % A.length;
        const aiItem = Ai[currentIndex];
        const sauthor = aiItem.getElementsByClassName('span7')[0];
        const simg = aiItem.querySelector('img');
        const sname = aiItem.querySelector('.span10 span:first-child');
        
        stop();
        resetAll2();
        
        displayimg.src = simg.src;
        displayauthor.textContent = sauthor.textContent;
        displayname.textContent = sname.textContent;

        const timeElement = document.querySelector('.time');
        timeElement.textContent = '00:00';

        audio.volume = currentVolume;
        audio.muted = isMuted;

        Ai[currentIndex].classList.add('music-playing');
        A[currentIndex].play().then(() => {
            isPlaying = true;
            playBtn.textContent = '❙❙';
            progressTimer = setInterval(updateProgress, 500);
        }).catch(err => {
            console.error("播放失败：", err);
            alert("播放失败！浏览器要求用户交互后才能播放音频");
        });
        
        A[currentIndex].onended = () => {
            A[currentIndex].currentTime = 0;
            progressBar.style.width = '0%';
            clearInterval(progressTimer);
            playBtn.textContent = '▶';
            isPlaying = false;
        };
    }

    function playNext() {
        if (currentIndex === -1) return;
        currentIndex = (currentIndex + 1) % A.length;
        const aiItem = Ai[currentIndex];
        const sauthor = aiItem.getElementsByClassName('span7')[0];
        const simg = aiItem.querySelector('img');
        const sname = aiItem.querySelector('.span10 span:first-child');
        
        stop();
        resetAll2();
        
        displayimg.src = simg.src;
        displayauthor.textContent = sauthor.textContent;
        displayname.textContent = sname.textContent;
        
        audio.volume = currentVolume;
        audio.muted = isMuted;

        Ai[currentIndex].classList.add('music-playing');
        A[currentIndex].play().then(() => {
            isPlaying = true;
            playBtn.textContent = '❙❙';
            progressTimer = setInterval(updateProgress, 500);
        }).catch(err => {
            console.error("播放失败：", err);
            alert("播放失败！浏览器要求用户交互后才能播放音频");
        });
        
        A[currentIndex].onended = () => {
            A[currentIndex].currentTime = 0;
            progressBar.style.width = '0%';
            clearInterval(progressTimer);
            playBtn.textContent = '▶';
            isPlaying = false;
        };
    }

    playBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrev);
    nextBtn.addEventListener('click', playNext);

    // 进度条
    progressWrap.addEventListener('click', (e) => {
        if (currentIndex === -1 || !A[currentIndex]) return;
        const audio = A[currentIndex];
        const rect = progressWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressPercent = (clickX / rect.width) * 100;

        const newTime = (audio.duration * progressPercent) / 100;
        audio.currentTime = newTime;
        
        const timeElement = document.querySelector('.time');
        timeElement.textContent = formatTime(newTime);

        progressBar.style.width = `${progressPercent}%`;
        progressWrap.style.setProperty('--progress-pos', `${progressPercent}%`);
        if (!isPlaying) {
            togglePlayPause();
        }
    });

    //音量
    const muteBtn = document.querySelector('.mute-btn');
    const volumeWrap = document.querySelector('.volume-wrap'); 
    const volumeBar = document.querySelector('.volume-bar');
    const volumeThumb = document.querySelector('.volume-thumb');
    let currentVolume = 0.5; 
    let isMuted = false; 
    let lastVolume = currentVolume;

    function initVolume() {
        A.forEach(audio => {
            audio.volume = currentVolume;
            audio.muted = isMuted;
        });
        updateVolumeUI();
    }
    initVolume();

    function updateVolumeUI() {
        const volumePercent = isMuted ? 0 : currentVolume * 100;
        volumeBar.style.width = `${volumePercent}%`;
        volumeThumb.style.left = `${volumePercent}%`;
        muteBtn.textContent = isMuted ? '🔇' : '🔊';
    }

    function setVolume(newVolume) {      
        newVolume = Math.max(0, Math.min(1, newVolume));
        currentVolume = newVolume;
        A.forEach(audio => {
            audio.volume = currentVolume;
            if (isMuted) {
                audio.muted = false;
                isMuted = false;
            }
        });
        updateVolumeUI();
    }

    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        
        A.forEach(audio => {
            audio.muted = isMuted;
        });
        
        if (isMuted) {
            lastVolume = currentVolume;
        } else {
            currentVolume = lastVolume;
            setVolume(currentVolume);
        }
        updateVolumeUI();
    });

    volumeWrap.addEventListener('click', (e) => {
        const rect = volumeWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const volumePercent = clickX / rect.width;
        setVolume(volumePercent);
    });

    let isDragging = false;
    volumeWrap.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = volumeWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const volumePercent = clickX / rect.width;
        setVolume(volumePercent);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const rect = volumeWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const volumePercent = clickX / rect.width;
        setVolume(volumePercent);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
};