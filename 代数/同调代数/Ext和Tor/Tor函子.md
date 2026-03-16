#代数 

Tor函子名自Torsion, 即绕转的意思. 它衡量的是[[代数/同调代数/Ext和Tor/张量积]]的"扭曲"程度. 通常地说, Tor函子就是 $\otimes$ 函子的[[经典导出函子|左导出函子]].

>[!def] Tor函子
>对任何环 $R,S,T$, 双函子 $\otimes_S$ 显然是[[平衡函子]], 因此可对每个 $n\in\Z$ 定义双函子
>$$\Tor_n=\Tor^S_n:(R,S)\mathsf{Mod}\times(S,T)\mathsf{Mod}\to(R,T)\mathsf{Mod}$$
>为 $\otimes_S$ 关于第一或第二个变元的左导出函子 (由平衡性, 它们是同构的), 即
>$$\begin{aligned}
\Tor_n=\Tor^S_n:(R,S)\mathsf{Mod}\times(S,T)\mathsf{Mod}\longrightarrow&(R,T)\mathsf{Mod}\\
(X,Y)\longmapsto&\Tor_n^\mathrm{I}(X,Y)\\\simeq&\Tor_n^{\mathrm{II}}(X,Y)
\end{aligned}$$
>其中
>$$\Tor_n^\mathrm{I}(X,Y)=(L^\mathrm{I}_n\otimes_S)(X,T),\quad \Tor_n^\mathrm{II}(X,Y)=(L^\mathrm{II}_n\otimes_S)(X,T)$$

双函子的平衡性源于投射模必然是[[平坦模]]. 同样地我们有 $\Tor^R_0(X,Y)=X\otimes_RY$. 并且有长正合列:

```tikz
\usepackage{tikz-cd} \begin{document} \Large\begin{tikzcd}[row sep=large] & \cdots & {\mathrm{Tor}^R_{n+1}(X'',Y)} \\ \\ {\mathrm{Tor}^R_n(X',Y)} & {\mathrm{Tor}^R_n(X,Y)} & {\mathrm{Tor}^R_n(X'',Y)} \\ \\ {\mathrm{Tor}^R_{n-1}(X',Y)} & \cdots \arrow[from=1-2, to=1-3] \arrow[from=3-1, to=3-2] \arrow[from=3-2, to=3-3] \arrow[from=5-1, to=5-2] \arrow["{\partial_{n+1}}"{pos=0.8}, from=1-3, to=3-1, rounded corners,  to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}] 
\arrow["{\partial_n}"{pos=0.8}, from=3-3, to=5-1, rounded corners, to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,-2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}]
\end{tikzcd} \end{document}
```

以及另一个方向上的:

```tikz
\usepackage{tikz-cd} \begin{document} \Large\begin{tikzcd}[row sep=large] & \cdots & {\mathrm{Tor}^R_{n+1}(X,Y'')} \\ \\ {\mathrm{Tor}^R_n(X,Y')} & {\mathrm{Tor}^R_n(X,Y)} & {\mathrm{Tor}^R_n(X,Y'')} \\ \\ {\mathrm{Tor}^R_{n-1}(X,Y')} & \cdots \arrow[from=1-2, to=1-3] \arrow[from=3-1, to=3-2] \arrow[from=3-2, to=3-3] \arrow[from=5-1, to=5-2] \arrow["{\partial_{n+1}}"{pos=0.8}, from=1-3, to=3-1, rounded corners,  to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}] 
\arrow["{\partial_n}"{pos=0.8}, from=3-3, to=5-1, rounded corners, to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,-2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}]
\end{tikzcd} \end{document}
```

其中 $0\to X'\to X\to X''\to0$ 和 $0\to Y'\to Y\to Y''\to0$ 均为 $\mathfrak A$ 中的短正合列. 显然有下面的定理:

>[!thm] 定理1
>左 $R$-模 $M$ 平坦 $\iff\Tor_1^R(M,-)=0\iff\Tor_{\ge1}^R(M,-)=0$.
>右 $R$-模 $N$ 平坦 $\iff\Tor_1^R(-,N)=0\iff\Tor_{\ge1}^R(-,N)=0$.

仿照投射解消的定义, 我们可以定义**平坦解消**(flat resolution) 为正合列
$$\cdots\to F^2\to F^2\to F^0\to M\to 0$$
其中每个 $F^i$ 都是平坦模. 由此我们也可以用平坦解消来计算Tor函子. 这是比较偏技术性的构造.

>[!thm] 定理2
>当 $R$ 是交换环时, $_R\mathsf{Mod}$ 中有同构
>$$\Tor_n(X,Y)\simeq\Tor_n(Y,X)$$
>其中 $n\in\Z$.

>[!pf]
>分别取 $X,Y$ 的平坦解消 $P_\bullet,Q_\bullet$. 令 $P\otimes Q$ 为双复形
>$$P_\bullet\underset{R}{\otimes}Q_\bullet$$
>的[[全复形]], 类似可以定义 $Q\otimes P$, 由交换约束有典范同构
>$$P_p\underset{R}{\otimes}Q_q\simeq Q_q\underset{R}{\otimes}P_p\quad p,q\in\Z$$
>换言之, $P\otimes Q$ 和 $Q\otimes P$ 作为双复形是同构的. 因此它们的全复形也是同构的, 从而有
>$$\Tor_n(X,Y)=H_n(\mathrm{tot}(P\otimes Q))\simeq H_n(\mathrm{tot}(Q\otimes P))=\Tor_n(Y,X)$$
