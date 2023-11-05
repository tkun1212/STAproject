function first(){
    var user = prompt("ユーザー名を入力してね");
        if(user=="000A0001" || user=="000A0002" || user=="000A0003"){
        var pass=prompt("パスワードを入力してね！！")
var passWord="S.T.A fast project"
if(pass == passWord){
    alert("ログインできました！！(https://tkun1212.github.io/Hello-test)入ったらGPSとIPアドレスがこちらに送信されます。");
}else{
    alert("ユーザー名又はパスワードが間違ってます。");
    first();
}
    }else{
    alert=("ユーザー名を入力してください。");
    first();
    }
}
    window.onload=first
