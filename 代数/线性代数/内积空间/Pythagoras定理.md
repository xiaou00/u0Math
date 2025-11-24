#线性代数 

>[!theorem] Pythagoras定理 (勾股定理)
>设$V$是[[内积空间]] ( 一般为[[Hilbert空间]]), $\vec u,\vec v\in V$, 且$\vec u\perp\vec v$([[正交]]), 则
>$$\norm{\vec u+\vec v}^2=\norm{\vec u}^2+\norm{\vec v}^2$$

>[!proof]
>显然$$\begin{aligned}
\norm{\vec u+\vec v}^2=&\langle \vec u+\vec v,\vec u+\vec v\rangle\\
=&\langle\vec u,\vec u\rangle+\langle\vec u,\vec v\rangle+\langle\vec v,\vec u\rangle+\langle\vec v,\vec v\rangle\\
=&\norm{\vec u}^2+0+0+\norm{\vec v}^2
\end{aligned}$$
