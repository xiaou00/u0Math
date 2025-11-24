#分析 

下面是一个重要的条件:

>[!proposition] Carathéodory条件
>对于$E\subset X$, 和[[外测度]]$\mu^*$若
>$$\forall A\in X,\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$$
>即对任意集合$A$, 其测度等于其在$E$之内的部分与$E$之外的部分之和. 则称集合$E$满足**Carathéodory条件**.

Carathéodory定理建立了外测度和[[测度]]的关键联系:

>[!theorem] Carathéodory定理
>设集合$X$以及集合$X$上的外测度$\mu^*$, 那么:
>1. $X$上全体满足Carathéodory条件的集合构成一个[[σ-代数]]$\Sigma$.
>2. 将外测度$\mu^*$限制到$\Sigma$上得到的集函数$\mu=\mu^*|_\Sigma$是一个测度.

>[!proof]
>显然对于$\O$, $\mu^*(\O)=0$, 且任何集合都满足$A\cap\O=\O$, $A\setminus\O=A$. 从而$\O$满足C-条件$\implies \O\in\Sigma$.
>对于$E\in\Sigma$, 那么$A$满足C-条件, 令$F=\complement_X E$, 对任意$A\in X$, $A\cap F=A\setminus E$, $A\setminus F=A\cap E$, 从而
>$$\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)=\mu^*(A\setminus F)+\mu^*(A\cap F)$$
>再证明可数可加性, 先证明有限情况, 设$A,B\in\Sigma$无交, 我们要证明$A\cup B\in\Sigma$, 由于$A\in\Sigma$, 对任意$S\in X$,
>$$\mu^*(S)=\mu^*(S\cap A)+\mu^*(S\setminus A)\tag{I}$$
>取$S'=S\setminus A$, 有
>$$\mu^*(S')=\mu^*(S'\cap B)+\mu^*(S\setminus B)\tag{II}$$
>将(II)代入(I), 
>$$\mu^*(S)=\mu^*(S\cap A)+\mu^*(S\setminus A\cap B)+\mu^*(S\setminus A\setminus B)\tag{III}$$
>对于第三项, $S\setminus A\setminus B=S\setminus(A\cup B)$. 记$C=A\cup B$, $S\cap C=S\cap(A\cup B)=(S\cap A)\cup(S\setminus A\cap B)$, 从而
>$$\mu^*(S\cap C)=\mu^*((S\cap A)\cup(S\setminus A\cap B))\le\mu^*(S\cap A)+\mu^*(S\setminus A\cap B)\tag{IV}$$
>将(IV)代回(III), 
>$$\mu^*(S)\ge\mu^*(S\cap C)+\mu^*(S\setminus C)\tag{V.I}$$
>由于$(S\cap C)\cup(S\setminus C)=S$, 外测度的公理告诉我们
>$$\mu^*(S)\le\mu^*(S\cap C)+\mu^*(S\setminus C)\tag{V.II}$$
>结合(V.I), (V.II)就得出了
>$$\mu^*(S)=\mu^*(S\cap C)+\mu^*(S\setminus C)$$
>这就证明了$C=A\cup B\in\Sigma$. 显然
>$$\mu^*(A\cup B)=\mu^*(A\cup B\cap B)+\mu^*(A\cup B\setminus B)=\mu^*(B)+\mu^*(A)$$
>成立($A,B$无交). 由归纳法易证有限并情况, 下面证明可数并. 设$(E_i)$是一个集合列, 且对于每个$i$都有 $E_i\in\Sigma$, . 不妨令
>$$E=\bigcup_{i=1}^\infty{E_i}$$
>我们的目标是证明$\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$. 不妨设
>$$H_n=\bigcup_{i=1}^n{E_i}$$
>我们已经证明了$H_n\in\Sigma$. 因此可以应用Carathéodory条件, 对任意集合$S\in X$,
>$$\mu^*(S)=\mu^*(S\cap H_n)+\mu^*(S\setminus H_n)\tag{VI}$$
>由于$H_n\subset E$, 有$\complement_XE\subset \complement_XH_n$, 由外测度的单调性, 
>$$\mu^*(S\setminus H_n)\ge\mu^*(S\setminus E)$$
>代入(VI), 有
>$$\mu^*(S)\ge\mu^*(S\cap H_n)+\mu^*(S\setminus E)\tag{VII}$$
>显然$S\cap H_n$是$S\cap E_1,S\cap E_2,\ldots,S\cap E_n$的无交并, 因此由已证的结论,
>$$\mu^*(S\cap H_n)=\sum_{i=1}^n{\mu^*(S\cap E_i)}$$
>代入(VII)有
>$$\mu^*(S)\ge\sum_{i=1}^n{\mu^*(S\cap E_i)}+\mu^*(S\setminus E)$$
>对任意$n$成立, 从而令$n\to\infty$有
>$$\mu^*(S)\ge\sum_{i=1}^n{\mu^*(S\cap E_i)+\mu^*(S\setminus E)}\ge\mu^*\left(\bigcup_{i=1}^\infty{S\cap E_i}\right)+\mu^*(S\setminus E)=\mu^*(S\cap E)+\mu^*(S\setminus E)\tag{VIII}$$
>同样地, 由$(S\cap E)\cup(S\setminus E)=S$, 由外测度的公理
>$$\mu^*(S)\le\mu^*(S\cap E)+\mu^*(S\setminus E)\tag{IX}$$
>结合(VIII), (IX)就得出了
>$$\mu^*(S)=\mu^*(S\cap E)+\mu^*(S\setminus E)$$
>这就证明了$E\in\Sigma$. 对有限可加性取极限容易证明可数可加性, 从而$\mu^*$在$\Sigma$上的限制是一个测度.
