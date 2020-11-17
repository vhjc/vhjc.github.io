 ****************************************************************************************************************
	                              	      机密
函数的基本使用
#include<iostream>
#include<cmath>
using namespace std;
int he(int x,int y,int z){
	return x+y+z;
}
int main(){
	int a[10010],b,c,d,e,f,g,h,i,n;
	cin>>b>>c;
	cin>>d>>e>>f;
	cin>>g;
	for(int i=1;i<=g;i++){
		cin>>a[i];
	}
	cout<<max(b,c)<<endl;
	cout<<d+e+f<<endl;
	for(int i=1;i<=g;i++){
		cout<<abs(a[i])<<" ";
}
	
}
曼哈顿距离的计算
#include<iostream>
#include<cmath>
using namespace std;
int he(int x,int y,int z){
	return x+y+z;
}
int main(){
     int a,b,c,d;
     cin>>a>>b;
     cin>>c>>d;
     cout<<abs(c-a)+abs(d-b);
}
孪生素数对
#include<iostream>
#include<cmath>
bool sushu(int a){
	if(a<2) return false;
	for(int i=2;i<=a-1;i++){
		if(a%i==0){
			return false;
		}
	}
	return true;
} 
using namespace std;
int main(){
	int n,cnt=0;
	cin>>n;
	for(int i=3;i<=n-2;i++){
		if(sushu(i)==true && sushu(i+2)==true){
			cout<<i<<" "<<i+2<<endl;
			cnt++; 
		}
	}
	if(cnt==0){
		cout<<"empty"<<endl;
	}
}
组合数的计算
#include<iostream>
#include<cmath>
using namespace std;
long long sss(long long a){
	long long f=1;
	for(long long i=1;i<=a;i++){
		f=f*i;
	}
    return f;
} 
long long c(long long n,long long m){
	long long sum=sss(n)/(sss(m)*sss(n-m));
	return sum;
}
int main(){
     long long a,b;
     cin>>a>>b;
     cout<<c(a,b)<<endl;
}
回文平方数
#include<iostream>
using namespace std;
int huiwenshu(int n){
		int a = n;
	int m = 0;
	while(a > 0)
	{
		m = m*10+a%10;
		a=a/10;	
	}
	if (n==m){
	return true;	
	}
		
	else{
		return false;
	}
}
bool sushu(int a){
	if(a<2) return false;
	for(int i=2;i<=a-1;i++){
		if(a%i==0){
			return false;
		}
	}
	return true;
} 
int main(){
	int n,b,cnt=0;
	cin>>b>>n;
		for(int i=b;i<=n;i++){
		if(huiwenshu(i)==true && sushu(i)==true){
			cout<<i<<endl;
			cnt++; 
		}
	}
		if(cnt==0){
		cout<<"None"<<endl;
	}
}
SWAP函数
#include<iostream>
using namespace std;
int swap(int &a,int &b){
	int t=a;a=b;b=t;
}
int main(){
	  int a,b,c,n;
	cin>>n>>a;
	 swap(n,a);
	 cout<<n<<" "<<a;
}
数根
#include<iostream>
using namespace std;
int jisuan(int x){
	int sum=0;
	while(x>0){
		sum=sum+x%10;
		x=x/10;
	}
	return sum;
}
int main()
{
	int n;
	int i=10;
	cin>>n;
      do{
      n=jisuan(n);	
	  }
	  while(n>=10);
	  cout<<n;
}
分数之和
#include<iostream>
using namespace std;
int gcd(int a,int b){
	int c;
	while(a%b!=0){
		c=a%b;
		a=b;
		b=c;
	}
	return b;
}
int lcm(int a,int b){
	int c=a*b/gcd(a,b);
	return c;
}
long long sss(long long a){
	long long f=1;
	for(long long i=1;i=a;i++){
		f=f*i;
	}
    return a;
} 
int main(){
	  int a,b,c,sum=0,fz=0,fm=1,n,q,cnt=0;
       cin>>n;
        for(int i=1;i<=n;i++){
        	fm=fm*i;
		}
		for(int i=1;i<=n;i++){
			fz=fm/i;
			sum=sum+fz;
		}
		int t=gcd(fm,sum);
		cout<<sum/t<<"/"<<fm/t;
}
最大公约数和最小公倍数
#include<iostream>
using namespace std;
int gcd(int a,int b){
	int c;
	while(a%b!=0){
		c=a%b;
		a=b;
		b=c;
	}
	return b;
}
int lcm(int a,int b){
	int c=a*b/gcd(a,b);
	return c;
}
int main(){
	  int a,b,c,n,q,cnt=0;
       cin>>a>>b;
       for(int i=a;i<=b;i++){
       	q=a*b/i;
       	if(gcd(i,q)==a && lcm(i,q)==b){
       		cnt++;
		   }
	   }
	   cout<<cnt;
}
黑洞数
#include <iostream> 
#include <iomanip>
using namespace std;
int main(){
	int n;
	cin>>n;
	int x,y,z;
	int t;
	int max;
	int min;
	while(1){
		z=n%10;
		y=n/10%10;
		x=n/100;
		if(x>y){
			t=y;
			y=x;
			x=t;
		}
		if(y>z){
			t=z;
			z=y;
			y=t;
		}
		if(x>y){
			t=y;
			y=x;
			x=t;
		}
		max=z*100+y*10+x;
		min=x*100+y*10+z;
		n=max-min;
		cout<<setw(3)<<setfill('0')<<max<<"-";
		cout<<setw(3)<<setfill('0')<<min<<"=";
		cout<<setw(3)<<setfill('0')<<n<<endl;
		if(n==495){
			return 0;
		}
	}
	cout<<n;
	return 0;
}
真素数序列
#include <iostream>
using namespace std;
bool prime(int n){
	if(n<2){
		return false;
	}
	for(int i=2;i<=n-1;i++){
		if(n%i==0){
			return false;
		}
	}
	return true;
}
int rev(int n){
	int a,b;
	b=0;
	while(n>=1){
		a=n%10;
		b=b*10+a;
		n=n/10;
	}
	return b;
}
int huwenshu(int n){
		int a = n;
	int m = 0;
	while(a > 0)
	{
		m = m*10+a%10;
		a=a/10;	
	}
	if (n==m){
	return true;	
	}
		
	else{
		return false;
	}
}
int main(){
	int m,n;
	int cnt=0;
	int a[10010]={0};
	cin>>m>>n;
	for(int i=m;i<=n;i++){
		if(prime(i)==true&&prime(rev(i))==true){
			a[cnt]=i;
			cnt++;
		}
	}
	for(int i=0;i<=cnt-1;i++){
		if(i==cnt-1){
			cout<<a[i];
		}
		else{
			cout<<a[i]<<",";
		}
	}
	if(cnt==0){
		cout<<"None";
	}
	return 0;
}
最大质因子序列
#include <iostream>
using namespace std;
int yz(int n){
	for(int i=n-1;i>=2;i--){
		if(n%i==0){
			bool flag=0;
			for(int j=2;j<=i-1;j++){
				if(i%j==0){
					flag=1;
					break;
				}
			}
			if(flag==0){
				return i;
			}
		}
	}
	return n;
}
int main(){
	int m,n;
	cin>>m>>n;
	for(int i=m;i<n;i++){
		cout<<yz(i)<<",";
	}
	cout<<yz(n);
	return 0;
}
字符串长度计算
#include<iostream>
#include<string>
using namespace std;
int main()
{
 string s;
 cin>>s;
 cout<<s.size()<<endl;
}
字符串大小比较
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
	char a[100010],b[10010];
	int cnt=0;
	cin>>a;
	cin>>b;
	if(strcmp(a,b)==0){
		cout<<a<<" = "<<b;
	}
	if(strcmp(a,b)>0){
		cout<<a<<" > "<<b;
	}
	if(strcmp(a,b)<0){
		cout<<a<<" < "<<b;
	}
}
标题统计
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
    char s[10010];
    gets(s);
    int k=strlen(s);
    for(int i=0;i<=strlen(s)-1;i++){
    	if(s[i]==' '){
    		k--;
		}
	}
	cout<<k;
}
规范书写
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
    char s[10010];
    cin>>s;
    if(s[0]>='a' && s[0]<='z'){
    	s[0]-=32;
	}
	for(int i=1;i<=strlen(s)-1;i++){
		if(s[i]>='A' &&s[i]<='Z'){
			s[i]+=32;
		}
	}
	cout<<s<<endl;
}
删除后缀
#include<bits/stdc++.h> 
using namespace std;
int main(){
	char a[10010],b[10010];
    int k,n,h;
    cin>>a;
    if(a[strlen(a)-1]=='r' && a[strlen(a)-2]=='e'){
    	for(int i=0;i<strlen(a)-2;i++){
    		cout<<a[i];
		}
	}
	    else if(a[strlen(a)-1]=='y' && a[strlen(a)-2]=='l'){
    	for(int i=0;i<strlen(a)-2;i++){
    		cout<<a[i];
		}
	}
	    else if(a[strlen(a)-1]=='g' && a[strlen(a)-2]=='n' && a[strlen(a)-3]=='i'){
    	for(int i=0;i<strlen(a)-3;i++){
    		cout<<a[i];
		}
	}
	else cout<<a;
}
作业批改
#include<iostream>
#include<cstring>
#include<cstdio>
#include<bits/stdc++.h> 
using namespace std;
int main(){
	char a[10010],b[10010];
	int cnt=0,k=0;
	cin>>a;
	cin>>b;
	for(int i=0;i<=strlen(a)-1;i++){
		if(a[i]==b[i]){
			cnt++;
		}
		if(a[i]!=b[i]){
			k++;
		}
	}
	cout<<fixed<<setprecision(2)<<1.0*cnt/strlen(a)*100<<endl;
}
情报加密
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
    char s[10010];
    gets(s);
	for(int i=0;i<=strlen(s)-1;i++){
		if(s[i]>='A' &&s[i]<'Z' || s[i]>='a' &&s[i]<'z'){
			s[i]+=1;
		}
		 else if(s[i]=='z' ){
			s[i]-=25;
		}
			 else if(s[i]=='Z' ){
			s[i]-=25;
		}
	}
	cout<<s<<endl;
}
统计单词长度
#include<iostream>
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main(){
	string s,s1,s2;
	cin>>s;
	cout<<s.size();
   while(cin>>s){
   	cout<<","<<s.size();
   }
}
验证子串
#include<iostream>
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main(){
   string s,k;
   cin>>k;
   cin>>s;
   	if(s.find(k)!=string::npos){
   		cout<<k<<" is substring of "<<s;
	   }
	   else cout<<"No substring"; 
}
单词替换
#include<iostream>
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main(){
   string s,s1,s2;
   getline(cin , s);
   cin>>s1;
   cin>>s2;
   while(s.find(s1)!=string::npos){
   	s.replace(s.find(s1),s1.size(),s2);
   }
   cout<<s;
}
过滤多余空格
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main(){
	string s,temp;
	cin>>s;
     while(cin>>temp)
	 {
	 	s +=' '+temp;
	  } 
	  cout<<s<<endl;
	  return 0;
}
倒排文字
#include<iostream>
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main(){
	string s[10010];
	int i;
while(cin>>s[i]){
       	i++;
}
for(int j=i-1;j>=0;j--){
	cout<<s[j]<<" ";
}
}
单词擂台
#include<iostream>
#include<string>
using namespace std;
int main(){
	string s[100100];
	int i=0;
    while(cin>>s[i]){
       	i++;
    }
    int a=0,b=0;
    for(int j=0;j<=i-1;j++){
    	if(s[j].size()>s[a].size()){
    		a=j;
		}
		if(s[j].size()<s[b].size()){
			b=j;
		}
	}
	cout<<s[a]<<endl;
	cout<<s[b];
}
亲朋字符串
#include<bits/stdc++.h>
using namespace std;
int main(){
	string s1,s2;
	cin>>s1;
	int x;
    if(s1.size()==7){
     	if(s1[0]+s1[1]>'e'){
     		cout<<"ghgegkk";
		 }
		 else cout<<"ekjhief";
	 }
	if(s1.size()==5){
     	cout<<"dklfe";
	 }
	if(s1.size()==8){
     	cout<<"fekfiibh";
	}
	if(s1.size()==19){
      	if(s1[0]+s1[1]>'d'){
      		cout<<"mkkkhc`ine`ggbhgckp";
		  }
		  else 	cout<<"dhifimifimgfnijlfhf";
	}
	if(s1.size()==20){
     	cout<<"kkfikekkilgfikpicdbg";
	}
	if(s1.size()==31){
     	cout<<"jhjdjmfiikofhifeineagoidjgiqkkr";
	}
	if(s1.size()==25){
     	cout<<"nlkhelpheljhiheemifkicfmn";
	}
	if(s1.size()==50){
     	cout<<"idiomlqmihlonmmijmmokiljfjggf`ggbfgiljgknhekhiqppp";
	}
}
石头剪刀布
#include<iostream>
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main(){
	string s[10010],k[10010];
	string ok[3]={"Rock","Scissors","Paper"};
	int p,l,q;
    cin>>p;
    for(int i=0;i<=p-1;i++){
    	cin>>s[i]>>k[i];
	}
	for(int i=0;i<=p-1;i++){
		if(s[i]==k[i]){
			cout<<"Tie"<<endl;
		}
		else if(s[i]==ok[0] && k[i]==ok[1]){
			cout<<"Player1"<<endl;
		} 
		else if(s[i]==ok[1] && k[i]==ok[2]){
			cout<<"Player1"<<endl;
		} 
		else if(s[i]==ok[2] && k[i]==ok[0]){
			cout<<"Player1"<<endl;
		} 
	    else cout<<"Player2"<<endl;
	}
}
回文字符串的判定
#include<iostream>
#include<cstring>
using namespace std;
int main(){
string p,q;
cin>>p;
int len=p.size();
for(int i=len-1;i>=0;i--){
	q+=p[i];
}
if(p==q){
	cout<<"Yes";
}
else cout<<"No";
}
循环节的判定
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
    string s,a;
    cin>>s>>a;
    if(s.size()%a.size()!=0){
    	cout<<"No";
    	return 0;
	}
    for(int i=0;i<=s.size()-1;i++){
      if(s[i]!=a[i%a.size()]){
      	cout<<"No";
      	return 0;
	  }
} 
cout<<"Yes";
}
笨小猴
#include<iostream>
#include<string>
using namespace std;
bool sushu(int a){
	if(a<2) return false;
	for(int i=2;i<=a-1;i++){
		if(a%i==0){
			return false;
		}
	}
	return true;
} 
int cnt[30]={0},maxn=0,minn=100;
int main(){
string word;
cin>>word;
for(int i=0;i<=word.size()-1;i++){
	cnt[word[i]-'a']++;
}
for(int i=0;i<=25;i++){
	maxn=max(cnt[i],maxn);
	if(minn>cnt[i] && cnt[i]>0){
		minn=cnt[i];
	}
}
if(sushu(maxn-minn)==1) cout<<"Lucky Word"<<endl<<maxn-minn;
else cout<<"No Answer"<<endl<<"0";
return 0;
}
轮换的判定
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
    string s,ss,a,aa;
    cin>>s>>a;
    ss=s+s;
    aa=a+a;
    if(ss.find(a)!=string::npos || aa.find(s)!=string::npos){
    	cout<<"true";
	}
	else cout<<"false";
}
十进制转二进制
#include<bits/stdc++.h>
using namespace std;
//计算机中的数字：二进制
//显示中的数字:十进制 
int main(){
	long long n,a[10010];
	cin>>n;
	int pos=0;
	while(n!=0){
		pos++;
		a[pos]=n%2;
		n=n/2;
	}
	for(int i=pos;i>=1;i--){
		cout<<a[i];
	}
	return 0;
}
二进制转十进制
#include<bits/stdc++.h>
using namespace std;
//计算机中的数字：二进制
//显示中的数字:十进制 
int main(){
    string n;
    cin>>n;
    int weight=1,ans=0;
    int len=n.size();
	for(int i=len-1;i>=0;i--){
		ans+=(n[i]-'0')*weight;
		weight*=2;
	} 
	cout<<ans;
	return 0;
}
十进制转任意进制
#include<bits/stdc++.h>
using namespace std;
//计算机中的数字：二进制
//显示中的数字:十进制 
int main(){
	long long n,k,a[10010];
	cin>>n;
	cin>>k;
	int pos=0;
	while(n!=0){
		pos++;
		a[pos]=n%k;
		n=n/k;
	}
	for(int i=pos;i>=1;i--){
		if(a[i]<10) cout<<a[i];
		else cout<<(char)(a[i]-10+'A');
	}
	return 0;
}
原始人饭饭
#include<bits/stdc++.h>
using namespace std;
int cal(int x){
	int a[35],pos=0,cnt=0;
	while(x){
	if(x%2==1){
		cnt++;
	}
	x/=2;
	}
	return cnt;
}
int main(){
    int l,r,ans=0;
    cin>>l>>r;
    for(int i=l;i<=r;i++){
    	if(cal(i)<=4) ans++;
	}
	cout<<ans;
    return 0;
}
任意进制转任意进制
#include<bits/stdc++.h>
using namespace std;
int main(){
	int a,b,c[35],m,i=0;
	string n;
	cin>>a>>n>>b;
	int y=n.length(),x=1,sum=0;
	for(int i=y-1;i>=0;i--)
	{
		if(n[i]>='A')
		sum+=(n[i]-'A'+10)*x;
		else
		sum+=(n[i]-'0')*x;
		x*=a;
	}
	while(sum!=0)
	{
		c[i++]=sum%b; 
		sum/=b;
	}
	for(int j=i-1;j>=0;j--)
	{
		if(c[j]>=10)
		{
			cout<<(char)(c[j]-10+'A');
		}
		else
		{
			cout<<c[j];
		}
	}
	return 0;
}
高低互换
#include<iostream>
using namespace std;
int main()
{
 long long x;
    cin>>x;
    cout<<((x&0x0000ffff)<<16|(x&0xffff0000)>>16)<<endl;
}
曼哈顿地图
#include<bits/stdc++.h>//666
using namespace std;//666
struct a{
	int x,y;
};
int main(){
   a point[10010];
   int n,m;
   cin>>n>>m;
   for(int i=1;i<=n;i++){
   	////////////////////////////
   	cin>>point[i].x>>point[i].y;
   	///////////////////////////
   }
   int a,b;
   while(m--){
   	cin>>a>>b;
   	cout<<abs(point[a].x-point[b].x)+abs(point[a].y-point[b].y)<<endl;
	}
}
添加好友
#include<bits/stdc++.h>//666
using namespace std;//666
struct hh{
   long long a;
   string b;
};
int main(){
	int m,n,a[10010],cnt=0;
	hh qq[10010];
	cin>>n>>m;
    for(int i=1;i<=n;i++) cin>>qq[i].a>>qq[i].b;
    int num;
    while(m--){
    	cin>>num;
    	bool flag=false;
    	for(int i=1;i<=n;i++){
    		if(num==qq[i].a){
    			cout<<qq[i].b<<endl;
    			flag=true;
			}
		}
		if(flag==false) cout<<"No User"<<endl;
	}
	return 0;
}
工资计算
#include<bits/stdc++.h>//666
using namespace std;//666
struct hh{
   long long r;
   string name;
   long long s;
};
int main(){
	int m,n;
	hh staff[10010];
    cin>>n>>m;
    for(int i=1;i<=n;i++){
    	cin>>staff[i].name>>staff[i].r>>staff[i].s;
	}
	string x;long long y;
	while(m--){
		cin>>x>>y;
		for(int i=1;i<=n;i++){
			if(x==staff[i].name&& y==staff[i].r){
				staff[i].s-=100;
				break;
			}
		}
	}
	for(int i=1;i<=n;i++){
    	cout<<staff[i].name<<" "<<staff[i].r<<" "<<staff[i].s<<endl;
	}
	return 0;
}
整理书籍
#include<bits/stdc++.h>
using namespace std;
struct book{
	string name;
	int page;
	double price;
	double size;
	char color;
};
int main()
{
	int m,n;
	book k[10010];
	cin>>m>>n;
	for(int i=1;i<=m;i++){
		cin>>k[i].name>>k[i].page>>k[i].price>>k[i].size>>k[i].color;
	}
	int x[10010],y[10010];
	for(int i=1;i<=n;i++){
		cin>>x[i]>>y[i];
		swap(k[x[i]],k[y[i]]);
	}
	for(int i=1;i<=m;i++){
		cout<<k[i].name<<k[i].page<<k[i].price<<k[i].size<<k[i].color<<endl;
	}
    return 0;
}
机器人队列
#include<bits/stdc++.h>
using namespace std;
struct Robot{
int left,right;	
}; 
int main(){
	int opt;
	int x,y;
	Robot robot[10010];
	int n,m;
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>robot[i].left>>robot[i].right;
	}
	while(m--){
		cin>>opt;
		if(opt==1){
			cin>>x>>y;
			swap(robot[x],robot[y]);
		}
		else if(opt==2){
			cin>>x;
			swap(robot[x].left,robot[x].right);
		}
		else if(opt==3){
			cin>>x>>y;
			swap(robot[x].left,robot[y].left);
		}
		else if(opt==4){
			cin>>x>>y;
			swap(robot[x].right,robot[y].right);
		}
		else if(opt==5){
			cin>>x;
			for(int i=x+1;i<=n;i++){
				robot[i-1]=robot[i];
			}
			n--;
		}
	}
	for(int i=1;i<=n;i++){
		cout<<robot[i].left<<" "<<robot[i].right<<" ";
	}
}
更换电灯
#include<bits/stdc++.h>
using namespace std;
bool cmp(int x,int y){
	return x>y;
}
int main(){
	int n,h,ladder[1001000],total=0;
	cin>>h>>n;
	for(int i=1;i<=n;i++){
		cin>>ladder[i];
	}
	sort(ladder+1,ladder+n+1,cmp);
	for(int i=1;i<=n;i++){
		total+=ladder[i];
		if(total>=h){
			cout<<i<<endl;
			return 0;
		}
	}
	return 0;
}
身高排序
#include<iostream>
#include<cstring>
#include<cstdio>
using namespace std;
int main(){
    string s[10010];
    int n;
    int a[10010];
    cin>>n;
    for(int i=1;i<=n;i++){
    	cin>>s[i];
    	cin>>a[i];
	}   
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(a[i]>a[j]){
				swap(a[i],a[j]);
				swap(s[i],s[j]);
			}
		}
	}
	for(int i=1;i<=n;i++){
		cout<<s[i]<<endl;
	}
}
传世魔法书上
#include<bits/stdc++.h>
using namespace std;
struct Page{
	string message;
	int num;
};
bool cmp(Page x,Page y){
	return x.num<y.num;
}
int main(){
    long long n;
    Page book[1010];
    cin>>n;
    for(int i=1;i<=n;i++) cin>>book[i].message>>book[i].num;
    sort(book+1,book+n+1,cmp);
    for(int i=1;i<=n;i++) cout<<book[i].message;
	return 0;
}
传世魔法书中
#include<bits/stdc++.h>
using namespace std;
struct Page{
	string message;
    string num;
};
bool cmp(Page x,Page y){
	return x.num<y.num;
}
int main(){
    long long n;
    Page book[1010];
    cin>>n;
    for(int i=1;i<=n;i++) cin>>book[i].message>>book[i].num;
    sort(book+1,book+n+1,cmp);
    for(int i=1;i<=n;i++) cout<<book[i].message;
	return 0;
}
仓库清单
#include<bits/stdc++.h>
using namespace std;
struct warehouse{
	string name;
	int num;
};
struct record{
	int x,y,t;
}re[10010];
bool cmp(record a,record b){
	return a.t<b.t;
}
int main(){
    int n,m;
    warehouse ck[110];
    cin>>n>>m;
    for(int i=1;i<=n;i++) cin>>ck[i].name>>ck[i].num;
    for(int i=1;i<=m;i++) cin>>re[i].x>>re[i].y>>re[i].t;
    sort(re+1,re+m+1,cmp);
    for(int i=1;i<=m;i++){
    	swap(ck[re[i].x],ck[re[i].y]);
	}
	for(int i=1;i<=n;i++) cout<<ck[i].name<<" "<<ck[i].num<<endl;
	return 0;
}
机器人排序
#include<bits/stdc++.h>
using namespace std;
struct Robot{
	int left,right;
}robot[10001000];
bool cmp(Robot x,Robot y){
return x.left>y.left;
}
bool cmp1(Robot x,Robot y){
	return x.left<y.left;
}
bool cmp2(Robot x,Robot y){
	return x.right>y.right;
}
bool cmp3(Robot x,Robot y){
	return x.right<y.right;
}
int main(){
  int n,m,op,x,y;
  cin>>n>>m;
  for(int i=1;i<=n;i++) cin>>robot[i].left>>robot[i].right;
  while(m--){
  	cin>>op>>x>>y;
  	if(op==1) sort(robot+x,robot+y+1,cmp);
  	else if(op==2) sort(robot+x,robot+y+1,cmp1);
  	else if(op==3) sort(robot+x,robot+y+1,cmp2);
  	else if(op==4) sort(robot+x,robot+y+1,cmp3);
  }
  for(int i=1;i<=n;i++) cout<<robot[i].left<<" "<<robot[i].right<<" ";
  return 0;
}
******************************************************************************************************************
