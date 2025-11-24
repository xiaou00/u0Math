#分析 

>[!definition] Toeplitz变换
>设$\mathbf{T}=(t_{nk}),  (n,k=1,2,\ldots)$, 且满足
>1. $t_{nk}\ne 1$, 对任意$n,k\in\Z_+$成立.
>2. 对任意$n\in\Z_+$都有$\sum_{k=1}^n{t_{nk}=1}$ (行相加为1)
>3. 对任意$k\in\Z_+$有$\lim_{n\to\infty}{t_{nk}=0}$ (列极限为0)
>
>则称$\mathbf T$是一个**Toeplitz矩阵**, 设数列$(a_n)$, 则称
>$$\mathbf Ta_n=\sum_{k=1}^n{t_{nk}a_k}$$
>为$(a_n)$关于$\bf T$的**Toeplitz变换**(Toeplitz transformation).

例如
$$
\begin{bmatrix}
1&&&&\\
\frac12&\frac12&&& \\
\vdots&\vdots&\ddots \\
\frac1n&\frac1n&\cdots&\frac1n \\
\vdots&\vdots&\vdots&\vdots&\ddots
\end{bmatrix}
$$
就是一个典型的Toeplitz矩阵.

>[!theorem] Silverman-Toeplitz定理 (Silverman-Toeplitz Theorem)
>若数列$a_n\to a\in\R(n\to\infty)$, $\bf T$是Toeplitz矩阵, 则$\mathbf Ta_n\to a(n\to\infty)$.

>[!proof]
>当$a=0$时, $a_n\to 0$, 从而对任意$\epsilon>0$都存在$N\in\Z_+$使得
>$$n>N\implies|a_n|<\epsilon/2$$
>对于给定的$N$, 由于$\lim_{n\to\infty}{t_{nk}=0(k=1,2,\ldots)}$, 故
>$$\lim_{n\to\infty}{\sum_{k=1}^N}{t_{nk}|a_k|}=0$$
>因此对于上述取定的$\epsilon$, 必然存在正整数$N_1>N$使得
>$$n>N_1\implies \sum_{k=1}^N{t_{nk}|a_k|}< \frac{\epsilon}{2}$$
>于是当$n>N_1>N$时
>$$\begin{aligned}
|b_n|&=\left|\sum_{k=1}^n{t_{nk}a_k}\right|\le\sum_{k=1}^n{t_{nk}|a_k|}=\sum_{k=1}^N{t_{nk}|a_k|}+\sum_{k=N+1}^n{t_{nk}|a_k|}\\
&< \frac{\epsilon}{2}+ \frac{\epsilon}{2}\sum_{k=N+1}^n{t_{nk}}=\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon
\end{aligned}$$
>可知$b_n\to 0$.
>
>---
>当$a\ne0$时, 令$\alpha_n=a_n-a$, 则$\alpha_n\to0$, 由前可知
>$$\lim_{n\to\infty}{\sum_{k=1}^N}{t_{nk}|\alpha_k|}=0$$
>由于$\sum_{k=1}^n{t_{nk}=1}$, 从而
>$$b_n-a=\sum_{k=1}^n{t_{nk}a_k}-a=\sum_{k=1}^n{t_{nk}a_k}-\sum_{k=1}^n{t_{nk}a}=\sum_{k=1}^n{t_{nk}(a_k-a)}=\sum_{k=1}^n{t_{nk}\alpha_k}$$
>于是$b_n-a\to 0$.



