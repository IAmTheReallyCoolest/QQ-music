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
		 	return jiaoShou;
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
 void Print(Point &p){
 	cout<<"����ǽ�ʦ����Ϊ��"<<p.salary()<<endl;
 	cout<<"����ǽ��ڹ���Ϊ��"<<p.jsSalary()<<endl;
 }
    int main()
    {
       int i(1),j;
       cin>>j;
       getSalary a(i,j);
       Print(a);
       return 0;
    }

 
