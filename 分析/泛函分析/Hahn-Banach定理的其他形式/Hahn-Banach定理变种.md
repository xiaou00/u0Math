#分析 

下面给出[[Hahn-Banach定理|H-B定理]]的几种变种.

>[!thm] Hahn-Banach定理 II (R.P. Agnew, A.P. Morse)
>设$X$是实线性空间, $\mc A$是一族互相交换的[[算子|线性算子]]$A_\nu:X\to X$构成的算子簇, 即对$\mc A$中任意两个映射$A_\nu$和$A_\mu$都有
>$$A_\nu A_\mu=A_\mu A_\nu\tag{I}$$
>设$p$是$X$上一个实值的, 正齐次的^[$p(\lambda x)=\lambda p(x)$, 对任意$\lambda>0$], 次可加^[ $p(x+y)\le p(x)+p(y)$, 对任意$x,y\in X$]的函数, 并且在每个$A_\nu$的作用下不变:
>$$p(A_\nu x)=p(x)\tag{II}$$
>设$Y$是$X$的一个线性子空间, $\ell$是$Y$上的线性泛函, 并且满足:
>1. $\ell$受$p$控制, 即对$Y$中每个$y$都有
>$$\ell(y)\le p(y)\tag{III}$$
>2. $Y$是$A_\nu$的[[不变子空间]], 即
>$$\forall y\in Y,\quad A_\nu y\in Y\tag{IV}$$
>3. $\ell$在每个$A_\nu$下不变, 即
>$$\forall y\in Y,\quad\ell(A_\nu y)=\ell(y)\tag{V}$$
>
>**我们断言.** $\ell$可以延拓到整个$X$上使得$\ell$受$p$控制, 且在每个$A_\nu$下不变.

>[!pf]
>显然若(II)对于簇$\mc A$中的两个算子 $A,B$ 成立, 则对于其乘积 $AB$ (也就是复合)也成立. 类似地, 若(IV)和(V)对 $A,B$ 成立, 那么对于 $AB$ 也成立. 同样若$A,B$与所有$A_\nu$交换, 其乘积也与所有$A_\nu$交换. 我们将恒等元 $I$ 和$\mc A$中全体元素的有限积加入$\mc A$, 这个扩充的集合构成了一个[[幺半群]]. 于是若$A,B$属于该幺半群, $AB$也属于该幺半群. 我们假设$\mc A$是如此构造的乘法幺半群.
>
>我们定义一个函数$g:X\to\R$为
>$$g(x)=\inf{p(\mc C x)}\tag{VI}$$
>这里$C$是$\mc A$中映射的一个凸组合, 即
>$$\mc C=\sum_{A_j\in\mc A}{a_j A_j},\quad a_j\ge 0,\quad\sum{a_j}=1$$
>由于$\mc A$是幺半群, $\mc A$中映射的凸组合的乘积仍然是$\mc A$中元素的凸组合. 由次可加性, 齐次性和(II), 有
>$$p(\mc Cx)=p\left(\sum{a_j A_j x}\right)\le\sum{a_jp}(A_jx)=p(x)\tag{VII}$$
>由于在(VI)中我们可以取$\mc C$中恒等元, 因此
>$$g(x)\le p(x)$$
>由于$p$是正齐次的, 由(VI)知$g$也是正齐次的. 下面证明$g$是次可加的. 设$x,y$是$X$中的任意元素, 由定义(VI), 对任意$\epsilon>0$, 在映射$\mc A$的凸包中存在算子$C,D$使得
>$$p(Cx)\le g(x)+\epsilon,\quad p(Dy)\le g(y)+\epsilon\tag{VIII}$$
>对算子$CD$应用(VI), 由于$C,D$交换, 得到
>$$g(x+y)\le p(CD(x+y))=P(DCx+CDy)\tag{IX}$$
>利用次可加性和(VII), 可以看出(IX)的右侧满足
>$$p(DC x)+p(CDy)\le p(Cx)+p(Dy)\tag{X}$$
>利用(VIII)估计(X), 我们断定
>$$g(x+y)\le g(x)+g(y)+2\epsilon$$
>由于$\epsilon$是任意的, $g$的次可加性成立. 根据(V), $Y$上的$\ell$在每个$A_\nu$的作用下不变, 因此对$\mc A$中映射的任意凸组合$\mc C$和$Y$中任意元素$y$.
>$$\ell(\mc Cy)=\ell\left(\sum{a_jA_jy}\right)=\sum{a_j\ell(A_jy)}=\sum{a_j\ell(y)}=\ell(y)$$
>由(IV)知, 若$y\in Y$, 则$\mc Cy$也属于$Y$. 对$\mc Cy$应用(III), 得到对任意$y\in Y$有
>$$\ell(\mc Cy)\le p(\mc C y)$$
>由于已经证明了$\ell(\mc Cy)=\ell(y)$, 有
>$$\ell(y)\le p(\mc Cy)$$
>由$g$的定义(VI), 对$y\in Y$,
>$$\ell(y)\le g(y)\tag{XI}$$
>应用[[Hahn-Banach定理|H-B定理]]证明, $\ell$可以延拓到整个$X$使得(XI)成立. 我们断言在(IV)意义下, 这样延拓的$\ell$在$\mc A$中所有映射$A$作用下是不变的, 对$\mc A$中任意$A$和自然数$n$, 我们定义$\mc C_n=\frac1n\sum_0^{n-1}{A^j}$. 由于$\mc A$是半群, $\mc C_n$属于$\mc A$的凸包. 显然$\mc C_n(I-A)=\frac1n(I-A^n)$.
>
>设$x$是$X$的任意点, 由(VI)可知
>$$g(x-Ax)\le p(\mc C_n(x-Ax))=p(\mc C_n(I-A)x)=\frac1np(x-A^nx)\tag{XII}$$
>由次可加性和(II),
>$$\frac1np(x-A^nx)\le\frac1n[p(x)+p(-A^nx)]=\frac1n[p(x)+p(-x)]$$
>结合(XII), 有
>$$g(x-Ax)\le\frac1n[p(x)+p(-x)]\tag{XIII}$$
>令$n\to\infty$, 由于(XIII)右端趋于0, 
>$$g(x-Ax)\le 0$$
>由于$g$控制$\ell$, 由上式可知
>$$\ell(x-Ax)\le 0$$
>$\ell$的线性性意味着对所有的$x$,
>$$\ell(x)\le\ell(Ax)$$
>以$-x$代替$x$得到
>$$\ell(-x)\le\ell(-Ax)$$
>这时两个相反的不等式, 故等号成立, 即$\ell$在每个$A$下不变. 由其构造显然可知$\ell$受$p$控制.

