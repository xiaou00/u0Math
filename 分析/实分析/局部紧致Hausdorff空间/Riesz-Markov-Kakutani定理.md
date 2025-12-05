#分析 

>[!theorem] Riesz-Markov-Kakutani定理
>设$X$是[[局部紧致]]的[[Hausdorff空间]], $\Lambda$是[[紧支函数]]空间$\csp_c(X,\R)$上的[[正线性泛函]], 则在$X$内存在一个包含$X$的全体[[Borel代数|Borel集]]的[[σ-代数]]$\Sigma$, 并且存在$\Sigma$上[[完备测度空间|完备]]的[[Radon测度]]$\mu$, 使得对任意$f\in\csp_c(X,\R)$,
>$$\Lambda f=\int_X{f\,\d\mu}$$

**注.** 证明过程中, 我们默认$K$表示$X$的紧子集, $V$表示$X$内开集.
我们约定记号$K\prec f$, 表示$f\in\csp_c(X)$, 对一切$x\in X$, $0\le f(x)\le 1$, 并对一切$x\in K$, $f(x)=1$.
我们约定记号$f\prec V$, 表示$f\in\csp_c(X)$, 对一切$x\in X$, $0\le f(x)\le 1$, 并且$\supp f\subset V$.

#### 唯一性的证明

**Proof.** 我们先从$\mu$的唯一性的证明开始. 显然若$\mu$满足Radon测度的第2,3条公理:

>[!note] 
>1. (R1)对任意开集$U\subset X$, 有
>$$\mu(U)=\sup\set{\mu(V)\mid V\subset U,V\text{是紧集}}$$
> 2. (R2)对任意Borel集$E$, 有
>$$\mu(E)=\inf\set{\mu(U)\mid U\supset E,U\text{是开集}}$$

那么$\mu$在$\Sigma$上由紧集上的取值完全决定. 设$\mu_1,\mu_2$是满足条件的测度, 只需证明对一切$K$有$\mu_1(K)=\mu_2(K)$. 

固定$K$和$\epsilon>0$, 由上述Radon测度的定义存在$V\supset K$使得
$$\mu_2(V)<\mu_2(K)+\epsilon$$
由[[Urysohn引理]], 存在一个$f\in\csp_c(X,\R)$, 且对一切$x\in X$, $0\le f(x)\le 1$使得:
1. 对任意$x\in K$, $f(x)=1$.
2. $\supp f\subset V$.
因此, 
$$\begin{aligned}
\mu_1(K)=&\int_X{\chi_K\,\d\mu_1}\le\int_X{f\,\d\mu_1}=\Lambda f=\int_X{f\,\d\mu_2}\\
\le&\int_X{\chi_V\,\d\mu_2}=\mu_2(V)<\mu_2(K)+\epsilon
\end{aligned}$$
于是$\mu_1(K)\le\mu_2(K)$. 互换$\mu_1,\mu_2$就能得出一个相反的不等式. 这就证明了唯一性.

#### $\mu$和$\Sigma$的构造

我们给出$\mu$的定义

>[!note] $\mu$的定义
>对$X$中的每个开集$V$, 不妨定义
>$$\mu(V)=\sup\set{\,\Lambda f:f\in\csp_c(X,\R);\,\forall x\in X,0\le f(x)\le 1;\,\supp f\subset V\,}$$
>若$V_1\subset V_2$, 显然上述定义蕴含$\mu(V_1)\le\mu(V_2)$. 因此若$E$是一个开集, 则
>$$\mu(E)=\inf\set{\mu(V):E\subset V,V\text{是开集}}$$

并且对每个$E\subset X$, 上述两种定义的$\mu$是一致的. 令$\Sigma_F$定义如下:

>[!note] $\Sigma_F$的定义
>$\Sigma_F$定义为全体满足以下条件的$E\subset X$:
>1. $\mu(E)<\infty$.
>2. $\mu(E)=\sup\set{\mu(K):K\subset E,K\text{是紧集}}$

同样可以给出$\Sigma$的定义

>[!note] $\Sigma$的定义
>$\Sigma$定义为全体使得对每个紧集$K$都有$E\cap K\in\Sigma_F$的集合$E$.

#### 证明$\mu$和$\Sigma$具有所要求的性质

显然, $\mu$是单调的, 即$A\subset B$时, 有$\mu(A)\le\mu(B)$. 且$\mu(E)=0$蕴含着$E\in\Sigma_F$和$E\in\Sigma$. 因此测度是完备的, 且由定义, (R2)也成立.

显然$\Lambda$的正性蕴含其单调性: $f\le g\implies \Lambda f\le \Lambda g$, 这是因为$\Lambda g=\Lambda f+\Lambda(g-f)$且$g-f\ge 0$.

>[!lemma] Step 1
>若$E_1,E_2,\ldots$是$X$的任意子集, 则
>$$\mu\left(\bigcup_{i=1}^\infty{E_i}\right)\le\sum_{i=1}^\infty{\mu(E_i)}$$

>[!proof]

首先证明若$V_1,V_2$是开集, 则
$$\mu(V_1\cup V_2)\le \mu(V_1)+\mu(V_2)\tag{I}$$
我们选取$g\prec V_1\cup V_2$, 由[[紧致流形的嵌入|此页面定理1]], 存在函数$h_1$和$h_2$使得$h_i\prec V_i$, 并且对$g$的支集内的一切$x$有$h_1(x)+h_2(x)=1$. 因此$h_ig\prec V$, $g=h_1g+h_2g$, 从而