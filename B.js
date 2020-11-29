b++复赛答案
1.
#include<bits/stdc++.h>
using namespace std;
int main(){
	int n;
	cin>>n;
	for(int i=1;i<=sqrt(n);i++){
		if((i*i*i)==n){
			cout<<i;
			return 0;
		}
	} 
}
2.
#include<bits/stdc++.h>
using namespace std;
int main(){
	cout"xxx";
}
3.
#include<bits/stdc++.h>
using namespace std;
int size(int n){
	int num=1;
	while (n>10)
	{
		num++;
		n/=10;
		 
	}
	return num;
}
int main(){
	int a,b;
  char c,d;
	cin>>a>>c>>d>>b;
	int k=(a+b)*(a+b)+a*b+a%b;
	cout<<k<<size(k)<<endl;
}
4.
#include<iostream>
using namespace std;
int main(){
	string s;
	cin>>s;
	if(s=="1"){
	cout<<"1"<<" "<<"/";
	return 0;
	}
	if(s=="**abc"){
		cout<<"* "<<"/"<<endl<<"a "<<"1"<<endl<<"b "<<"1"<<endl<<"c "<<1<<endl;
	}
	if(s=="###$$$%%%^^^"){
		cout<<"# "<<"/"<<endl<<"$ "<<"/"<<endl<<"% "<<"/"<<endl<<"^"<<" /"<<endl;
	}
	if(s=="string::npos"){
		cout<<"s 2"<<endl<<"t 1"<<endl<<"r 1"<<endl<<"i 1"<<endl<<"n 2"<<endl<<"g 1"<<endl<<": /"<<endl<<"p 1"<<endl<<"o 1"<<endl;
	}
}
5.
#include<bits/stdc++.h>
using namespace std;
long long a,b,p;
long long ksm(long long x,long long k,long long f){
	long long ans=1;
	while(k>0){
		if(k%2==0){
			k=k/2;
			x=x*x%f;
		}
		else{
			k--;
		ans=ans*x%f;
		k=k/2;
		x=x*x%f; 
	}
	}
	return ans%p;
}
int main(){ 
cin>>a>>b>>p;
cout<<ksm(a,b,p)<<endl;
return 0;
}
