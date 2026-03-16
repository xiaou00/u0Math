#代数 

Lie代数是研究微分算子之间相互作用的天然框架.

>[!def] Lie代数
>一个[[域]] $\F$ 上的**Lie代数**是一个 $\F$-[[线性空间]] $\mathfrak g$, 并配备二元运算
>$$[\cdot,\cdot]:\mathfrak g\times\mathfrak g\to\mathfrak g$$
>称之为**Lie括号/Lie导数** (Lie bracket), 满足下面三条公理, 对任意 $a,b\in\F;\,X,Y,Z\in\mathfrak g$, 满足:
>1. 双线性:
>	- $[aX+bY,Z]=a[X,Z]+b[Y,Z]$;
>	- $[X,aY+bZ]=a[X,Y]+b[X,Z]$;
>2. 反对称性:
>	- $[X,X]=0$; ( i.e. $[X,Y]=-[Y,X]$ )
>3. Jacobi恒等式:
>	- $[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0$;

需要注意的是, Lie代数并不一定是[[结合代数]].

