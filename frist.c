#include<stdio.h>
#define n 5
int a[n],top=-1;
void dispaly()
{
int i;
if(top<0)
printf("Array is empty......\n");
else{
for(i=0;i<=top;i++)
printf("%d  ",a[i]);
}
}
int insert(int val)
{
if(top>=n-1)
printf("Array is full.......\n");
else
{
top++;
a[top]=val;
printf("insert element is\n:%d",val);
}
}
int delet()
{
if(top<0)
printf("Array is empty............\n");
else
{
printf("Deleted element is\n:%d",a[top]);
top--;
}
}
int finsert(int val)
{
int i;
if(top>=n-1)
printf("array is full......\n");
else if(top<0)
{
top++;
a[top]=val;
}
else
{
top++;
for(i=top;i>=0;i--)
{
a[i]=a[i-1];
}
a[0]=val;
printf("insert element is:%d",val);
}
}
int fdelet()
{
int c,i;
c=a[0];
if(top<0)
printf("array is empty...\n");
else
{
printf("deleted element is:%d",a[0]);
for(i=0;i<top;i++)
{
a[i]=a[i+1];
}
top--;
}
}
int main()
{
int ch,m;
printf("1.insert\n");
printf("2.delet\n");
printf("3.first insert\n");
printf("4.first delet\n");
printf("5.display\n");
printf("6.exit\n");
while(ch!=6)
{
printf("enter choise:");
scanf("%d",&ch);
switch(ch)
{
case 1:
printf("enter element:");
scanf("%d",&m);
insert(m);
break;
case 2:
delet();
break;
case 3:
printf("enter element:");
scanf("%d",&m);
finsert(m);
break;
case 4:
fdelet();
break;
case 5:
dispaly();
break;
case 6:
printf("exit");
break;
default:
printf("wrong choice");
}
};
}