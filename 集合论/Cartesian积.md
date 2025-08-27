#集合 

> [!definition] 有序对和$n$元组
> 设元素$a,b\in A$. 将$a,b$按顺序排成的有序元素对称为**有序对**(ordered pair),也称为**序偶**, 记作$(a,b)$.
> 类似地, 称$\enum{a}{n}$按顺序排成的有序元素对称为**$n$元组**($n$-tuple),记作$(\enum{a}{n})$.

有了有序对的概念, 我们可以定义两个集合的Cartesian积

>[!definition] Cartesian积
>我们定义[[集合]]$A$与集合$B$的**Cartesian积**为所有$A$中元素与$B$中元素组成的有序对的集合, 即
>$$A\times B:=\set{(a,b)|a\in A,b\in B}$$

同样地, 我们可以定义多个集合的额Cartesian积

>[!definition] 多个集合的Cartesian积
>定义集合$\enum{X}{k}$的**Cartesian积**为
>$$\esum{X}{\times}{k}:=\set{(\enum{x}{k})|x_1\in X_1,x_2\in X_2,\ldots,x_k\in X_k}$$

最后, 我们定义更一般的Cartesian积

>[!definition] $J$-串
>$J$-串是$n$元组概念的拓展, 若$J$是一个指标集, 对于给定的集合$X$, **$J$-串**($J$-tuple)定义为一个映射$x:J\to X$, 用$x_\alpha$表示$x(\alpha)$, 称之为$x$的第$\alpha$个**坐标**(coordinate). 常用$(x_\alpha)_{\alpha\in J}$来表示$J$-串.

>[!definition] 无限集合族的Cartesin积
>设$\set{A_\alpha}_{\alpha\in J}$是一个加标集族, 令$X=\bigcup_{\alpha\in J}{A_\alpha}$. 加标集族$\set{A_\alpha}_{\alpha\in J}$的**Cartesian积**定义为使得每一个$\alpha\in J$有$x_\alpha\in A_\alpha$的$X$的元素的所有$J$-串$(x_\alpha)_{\alpha\in J}$的集合, 用$$\prod_{\alpha\in J}{A_\alpha}$$表示. 也就是说, 他是所有形如$$x:J\to\bigcup_{\alpha\in J}{A_\alpha}$$的集合, 且满足对每一个$\alpha\in J, x(\alpha)\in A_\alpha$.

