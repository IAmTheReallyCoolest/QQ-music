#include <iostream>
using namespace std;
 const int jiaoShou=4000;
 const int buZhu=1000;
 class Point{
 	public:
 		Point(int i){
 			x=i;
		 }
		 virtual int salary(){
		 	return 0;
		 }
		 virtual int jsSalary(){
		 	return 0;
		 } 
		 private:
		 	int x;
 };
 class getSalary:public Point{
 	public:
	 getSalary(int i,int j):Point(i){
	 	y=j;
	 }	
	 int salary(){
	 	return y*50+buZhu;
	 }
	 private:
	 	int y;
 };
 class getJsSalary:public Point{
 	public:
 		getJsSalary(int i):Point(i){
 			
		 }
		 int jsSalary(){
		 	return jiaoShou;
		 }
 };
 void Print1(Point &p){
 	cout<<"��ʦ����Ϊ��"<<p.salary()<<endl;
 
 }
 void Print2(Point &p){
 		cout<<"���ڹ���Ϊ��"<<p.jsSalary()<<endl;
 }
    int main()
    {
    	 int i,j;
       cout<<"����ǽ���������1,����ǽ�ʦ������2"<<endl;
	   cin>>i; 
	   if(i==1){
	   	getJsSalary b(i);
	   	Print2(b);
	   }else{
	   		cout<<"�������ʱ��"<<endl;
	   		 cin>>j;
	   		  getSalary a(i,j);
       Print1(a);
	   }
   
       return 0;
    }

 
