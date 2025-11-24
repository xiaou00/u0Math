#分析 

>[!theorem] Hahn-Banach定理 I
>设$X$是实[[赋范空间]], $M$是$X$的子空间, 设有[[泛函]]
>$$p:X\to\R$$
>满足对任意$x,y\in X$和正实数$\lambda$都有$$\begin{aligned}
p(x+y)\le p(x)+p(y)\\
p(\lambda x)=\lambda p(x)
\end{aligned}$$
>若$M$上的[[有界线性算子|有界线性泛函]]$f:M\to\R$满足对任意$x\in M$有
>$$f(x)\le p(x)$$
>则可将$f$延拓至$X$上使得对任意$x\in X$有
>$$-p(-x)\le f(x)\le p(x)$$

