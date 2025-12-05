#分析 

分析学中有很多不一样的函数空间, 而$\ms{L}^p$空间是其中研究最为广泛的一类空间.

>[!definition] $\ms{L}^p$空间
>记$\mathbb K$为$\R$或$\C$ (取决于语境), 有[[测度空间]]$(X,\mc A,\mu)$, 对于实数$p\in(0,\infty]$, 我们定义:
>$$\ms{L}^p(\mu):=\set{f:X\to\mathbb K\,\Big|\,f\text{可测},\int_X{\lvert f\rvert^p\,\d\mu}<\infty}\tag{I}$$
>即, 全体$p$次幂可测且绝对收敛的$\mathbb K$函数$f$的集族. 容易验证其构成一个[[线性空间]]. 因此称之为测度$\mu$的**Lp空间**(Lp space).
>
>一些语境下, 我们若强调$\ms{L}^p$作为函数空间, 那么我们会定义$\ms{L}^p$为(I)中集合再商去一个等价关系$\sim:f\sim g\iff f,g$[[几乎处处]]相等. 我们在对应的空间上定义范数为:
>$$\norm{f}_p=\left(\int_X{|f|^p\,\d\mu}\right)^{1 /p}$$
>则当$p\ge1$时, $\ms{L}^p$对于**Lp范数**$\norm{\cdot}_p$构成[[赋范空间]], 可以证明它还是[[完备空间|完备]]的, 因此Lp空间是[[Banach空间]].
>
>---
>特别地, 对于$p=\infty$, 我们定义
>$$L^\infty(\mu):=\set{\,f:X\to\mathbb K\mid f\text{可测};\exists M\ge 0,\mu\set{x\in X:|f(x)|>M}=0\,}$$
>即, $f$几乎处处有界. 此时的**L∞范数**定义为
>$$\norm{f}_\infty=\operatorname{ess}\sup_{x\in X}{|f(x)|}=\inf\set{\,M\ge 0:\mu\set{\,x\in X:|f(x)|>M\,}=0\,}$$
>称之为$|f|$的**本质上确界**, 即去掉零测集后的上确界, 容易证明这也是一个[[Banach空间]].

>[!hint] 关于$\ms{L}^p$作为Banach空间的论证
>由于我们商去了等价关系(相当于商去了几乎处处为0的函数组成的子空间), 因此$\norm{f}=0\iff f=0$是成立的.
>数乘的证明是平凡的.
>$\ms{L}^p$范数的三角不等式-[[Minkowski不等式]].
>$\ms{L}^p$空间的完备性-[[Riesz-Fisher定理]].
>对于$p=\infty$时后两者的证明是平凡的.

若我们取[[计数测度]]空间$(\Z_+,\wp\Z_+,c)$, 其中$\N$为自然数集, $\wp\N$为幂集, $c$为计数测度. 简单的求和便是[[Lebesgue积分]]的一个特例. 故可以作以下定义:

>[!definition] $\ell^p$空间
>对于$p\in(0,\infty]$, 我们定义$\ell^p$为$\R^\omega$(或$\C^\omega$)中全体$p$次幂绝对收敛的[[级数]]构成的空间, 即
>$$\ell^p:=\set{(a_n)_{n\in\Z_+}\,\Big|\,\sum_{n=1}^\infty{|a_n|^p}<\infty}$$
>同样可以定义范数:
>$$\norm{(a_n)}_p=\left(\sum_{n=1}^\infty{|a_n|^p}\right)^{1/p}$$
>若$p\ge1$, 则空间构成[[Banach空间]]. 称之为**离散lp空间**, 记作$\ell^p$.



