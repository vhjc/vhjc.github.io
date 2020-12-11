#include<bits/stdc++.h>   
using namespace std; 
int n,m,pos=1,ans=0;
struct Supplier{
	int price,num;
}supplier[10000000];
bool cmp(Supplier x,Supplier y){
	return x.price<y.price;
}
int main(){
cin>>n>>m;
for(int i=1;i<=m;i++) cin>>supplier[i].price>>supplier[i].num;
sort(supplier+1,supplier+m+1,cmp);
while(n>0){
	if(n>supplier[pos].num){
		ans+=supplier[pos].num*supplier[pos].price;
		n-=supplier[pos].num;
	}else{
		ans+=n*supplier[pos].price;
		n-=n;
	}
	pos++;
}
cout<<ans;
return 0;
}
#include<bits/stdc++.h>   
using namespace std; 
int n,monkey[2010],cnt=0;
int main(){
	cin>>n;
	for(int i=1;i<=n;i++) cin>>monkey[i];
	sort(monkey+1,monkey+n+1);
	for(int i=n;i>=1;i--){
		if(monkey[i]>monkey[i-1]){
			cnt++;
		}
	}
	cout<<cnt;
return 0;
}
#include<bits/stdc++.h>
using namespace std;
int main () {
	int n,t,a[10005],b[10005],cnt=0;
	cin>>n>>t;
	for (int i=1;i<=n;i++) {
		cin>>a[i];
	}
	sort(a+1,a+n+1);
	for (int i=1;i<=n-1;i++) {
		b[i]=a[i+1]-a[i];
	}	
	sort(b+1,b+n);
	for (int i=1;i<=t;i++) {
		cnt+=b[i];
	}
	cout<<cnt;
	return 0;
}
#include<bits/stdc++.h>
using namespace std;
int main(){
	int k,e,n,f[110],r[110];
	cin>>k>>e>>n;
	for(int i=1;i<=n;i++){
		int x,c;
		cin>>x>>f[i]>>c;
		r[i]=c+(e-x);
	}
	for(int i=1;i<=n-1;i++){
		for(int j=i;j<=n;j++){
			if(r[j]<r[i]){
				swap(r[j],r[i]);
				swap(f[j],f[i]);
			}
		}
	}
	int ans=0,i=1;
	while(k>0){
		if(k>f[i]){
			ans=ans+r[i]*f[i];
			k=k-f[i]; 
		}
		else{
			ans=ans+r[i]*k;
			k=0;
		}
		i++;
	}
	cout<<ans;
}
#include<bits/stdc++.h>
using namespace std;
struct node{
	int start,end;
}a[10005];
int cmp (node a,node b) {
	return a.end<b.end; 
}
int main () {
	int n,cnt=0,sum=0;
	cin>>n;
	for (int i=1;i<=n;i++) {
		cin>>a[i].start>>a[i].end;
	}
	sort (a+1,a+n+1,cmp); 
	for (int i=1;i<=n;i++) {
		if (sum<=a[i].start) {
			cnt++;
			sum=a[i].end;
		}
	}
	cout<<cnt;
	return 0;
}
#include <iostream>
#include <algorithm>
using namespace std;
int x[200000];
bool sorting(int a,int b){
	return a>b;
}
int main(){
	int n;cin >> n;
	for(int i=0;i<n;i++){
		cin >> x[i];
	}
	int ans = 0;
	sort(x,x+n,sorting);
	for(int i=0;i<n;i++){
		if(x[i] >= i){
			ans++;
		}
	}
	cout << ans;
	return 0;

}
