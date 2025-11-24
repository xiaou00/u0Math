#分析 

本页中将给出一个经典的Lebesgue不可测集合的构造. 即对于实[[测度空间]]$(\R,\mc M,m)$, 存在一个集合$\mc V$, 使得
$$\mc M\not\supset\mc V\subset \R$$
我们先在闭区间$[0,1]\subset\R$上定义一个关系$\sim$:
$$x\sim y\iff x-y\in\Q$$
这类似于我们对同余的定义, 容易验证其满足等价关系, 因为:
1. $x-x=0\in\Q$.
2. $y-x=-(x-y)\in\Q$.
3. $x-y,y-z\in \Q\implies x-z=(x-y)+(y-z)\in\Q$.
因此可以给出$[0,1]$的一个划分$[0,1] /\sim$, 其每个元素都是两两无交的等价类$[x]$, 即
$$[x]=(x+\Q)\cap[0,1]$$
并且每个等价类$[x]$非空.
下面, 我们要应用[[选择公理]](AC), 从$[0,1]/\sim$中的每个等价类中选取一个代表元构成集合$\mc V$, 即
$$\mc V=\set{\,\ms p[x]\mid [x]\in[0,1] /\sim\,}$$
其中$\ms p$是选择函数, 由AC能确保其存在性. 我们定义的集合$\mc V$就称为**Vitali集**(Vitali set). 显然Vitali集是**不可数**的: 想象每次从$[0,1]$里选择等价类$[x]$, 这个等价类是可数的.  然而可数的可数并仍然是可数的, 因此一定是不可数并才能使得其构成$[0,1]$的划分. 从而等价类数量不可数, 与之等势的Vitali集也不可数.

>[!theorem] Vitali集不可测
>Vitali集$\mc V\notin\mc M$

>[!proof]
>我们令$\Q^\circ=\Q\cap[-1,1]$, 定义$\mc V$的一个平移:
>$$\mc V_q=\mc V+q=\set{\,v+q\mid v\in\mc V\,},\quad q\in\Q^\circ$$
>任取$p,q\in\Q^\circ$且$p\ne q$, 假设$\mc V_p\cap\mc V_q\ne\O$, 则存在$z$使得
>$$z=v_1+p\quad\land\quad z=v_2+q\quad(v_1,v_2\in\mc V)$$
>则$v_1-v_2=q-p\in\Q$. 从而$v_1\sim v_2$, 然而由$\mc V$的构造, 每个等价类中的元素唯一, 从而$v_1=v_2$, 这导致$p=q$, 与假设矛盾. 从而$\mc V_p,\mc V_q$无交, 由于$p,q$是任意的, 因此$\set{\mc V_q}_{q\in\Q^\circ}$是一个两两不交的可数集合族. 于是我们作它们的可数并
>$$\mc V^\circ=\bigcup_{q\in\Q^\circ}{\mc V_q}$$
>则:
>1. $[0,1]\subset\mc V^\circ$, 这是因为$\mc V$对应的商集构成$[0,1]$的划分: 任给$x\in[0,1]$, 都可以表示为$v+q$, 其中$v\in\mc V, q\in\Q^\circ$.
>2. $\mc V^\circ\subset[-1,2]$, 这是因为$\mc V\subset[0,1]$且$\Q^\circ\subset[-1,1]$.
>
>不妨设$\mc V\in\mc M$, 即Vitali集可测, 由[[Lebesgue测度]]的平移不变性, 对任意$q\in\Q^\circ$, $\mc V_q$也是可测的, 且$m(\mc V_q)=m(\mc V)$. 并且由可数可加性以及$\mc V^\circ$的定义,
>$$m(\mc V^\circ)=\sum_{q\in\mc\Q^\circ}{m(\mc V_q)}\tag{I}$$
>根据测度的单调性, 
>$$1=m[0,1]\le m(\mc V^\circ)\le m[-1,2]=3\tag{II}$$
>若$m(\mc V)=0$, 则
>$$m(\mc V^\circ)=m\left(\bigcup_{q\in\Q^\circ}{\mc{V_q}}\right)=\sum_{q\in\mc\Q^\circ}{m(\mc V_q)}=\sum_{q\in\mc\Q^\circ}{m(\mc V)}=\sum_{q\in\Q^\circ}0=0$$
>(这是由绝对收敛级数重排得到的) 与(II)中$m(\mc V^\circ)\ge 1$矛盾. 若$m(\mc V)>0$, 则
>$$m(\mc V^\circ)=m\left(\bigcup_{q\in\Q^\circ}{\mc{V_q}}\right)=\sum_{q\in\mc\Q^\circ}{m(\mc V_q)}=\sum_{q\in\mc\Q^\circ}{m(\mc V)}=\infty$$
>(设充分小$1/k$, 然后结合级数容易证明) 与(II)中$m(\mc V^\circ)\le 3$矛盾. 从而假设不成立. $\mc V$是Lebesgue不可测的.

