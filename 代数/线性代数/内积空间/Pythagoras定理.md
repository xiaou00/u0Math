#线性代数 

>[!thm] Pythagoras定理 (勾股定理)
>设$V$是[[Hilbert空间]], $\vec u,\vec v\in V$, 且$\vec u\perp\vec v$是[[正交]]的, 则
>$$\lVert{\vec u+\vec v}\rVert^2=\lVert{\vec u}\rVert^2+\lVert{\vec v}\rVert^2$$

>[!pf]
>显然$$\begin{aligned}
\norm{\vec u+\vec v}^2=&\langle \vec u+\vec v,\vec u+\vec v\rangle\\
=&\langle\vec u,\vec u\rangle+\langle\vec u,\vec v\rangle+\langle\vec v,\vec u\rangle+\langle\vec v,\vec v\rangle\\
=&\norm{\vec u}^2+0+0+\norm{\vec v}^2
\end{aligned}$$
