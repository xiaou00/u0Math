#代数 

Ext函子名自Extension, 即扩张. 它衡量的是[[Hom函子]]的不正合性. 通常来说, Ext函子就是Hom函子的[[经典导出函子|右导出函子]].

>[!def] Ext函子
>取 $\mathfrak A$ 为[[Abel范畴]]且有足够的内射和投射对象, 考虑
>$$\Hom=\Hom_\mathfrak A:\mathfrak A^{\mathrm{op}}\times\mathfrak A\to\mathsf{Ab}$$
>显然其对两个变元左正合且为[[平衡函子]], 定义
>$$\begin{aligned}
\Ext^n_{\mathfrak A,\mathrm{I}}(X,Y)=&R^n_\mathrm{I}\Hom_{\mathfrak A}(X,Y)\\
\Ext^n_{\mathfrak A,\mathrm{II}}(X,Y)=&R^n_\mathrm{II}\Hom_{\mathfrak A}(X,Y)
\end{aligned}$$
>为 $\Hom_{\mathfrak A}$ 关于第一个和第二个变元的右导出函子, 由其平衡性有 $\Ext^n_{\mathrm{I}}(X,Y)\simeq\Ext^n_{\mathrm{II}}(X,Y)$. 从而可以直接定义
>$$\begin{aligned}
\Ext^n=\Ext^n_\mathfrak A:\mathfrak A^{\mathrm{op}}\times\mathfrak A\longrightarrow&\mathsf{Ab}\\
(X,Y)\longmapsto&\Ext^n_\mathrm{I}(X,Y)\\\simeq&\Ext^n_{\mathrm{II}}(X,Y)
\end{aligned}$$
>为 $\Hom_{\mathfrak A}$ 的第 $n$ 个**Ext函子**(Ext/extension functor).

注意到, $\Ext^0=\Hom$, 而 $(\Ext^n)_{n\ge 0}$ 则对变元 $X,Y$ 有长正合列:

```tikz
\usepackage{tikz-cd} \begin{document} \large\begin{tikzcd}[row sep=large] & \cdots & {\mathrm{Ext}^{n-1}(X',Y)} \\ \\ {\mathrm{Ext}^{n}(X'',Y)} & {\mathrm{Ext}^{n}(X,Y)} & {\mathrm{Ext}^{n}(X',Y)} \\ \\ {\mathrm{Ext}^{n+1}(X'',Y)} & \cdots \arrow[from=1-2, to=1-3] \arrow[from=3-1, to=3-2] \arrow[from=3-2, to=3-3] \arrow[from=5-1, to=5-2] \arrow["{\delta^{n-1}}"{pos=0.8}, from=1-3, to=3-1, rounded corners,  to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}] 
\arrow["{\delta^n}"{pos=0.8}, from=3-3, to=5-1, rounded corners, to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,-2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}]
\end{tikzcd} \end{document}
```

以及另一个方向上的:

```tikz
\usepackage{tikz-cd} \begin{document} \large\begin{tikzcd}[row sep=large] & \cdots & {\mathrm{Ext}^{n-1}(X,Y'')} \\ \\ {\mathrm{Ext}^{n}(X,Y')} & {\mathrm{Ext}^{n}(X,Y)} & {\mathrm{Ext}^{n}(X,Y'')} \\ \\ {\mathrm{Ext}^{n+1}(X,Y')} & \cdots \arrow[from=1-2, to=1-3] \arrow[from=3-1, to=3-2] \arrow[from=3-2, to=3-3] \arrow[from=5-1, to=5-2] \arrow["{\delta^{n-1}}"{pos=0.8}, from=1-3, to=3-1, rounded corners,  to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}] 
\arrow["{\delta^n}"{pos=0.8}, from=3-3, to=5-1, rounded corners, to path={
-- ([xshift=2ex]\tikztostart.east)
|- (2,-2)\tikztonodes
 -| ([xshift=-2ex]\tikztotarget.west)
 -- (\tikztotarget)}]
\end{tikzcd} \end{document}
```

其中 $0\to X'\to X\to X''\to0$ 和 $0\to Y'\to Y\to Y''\to0$ 均为 $\mathfrak A$ 中的短正合列. 显然有下面的定理:

>[!thm] 定理1
>对象 $I$ 内射$\iff\Ext^1(-,I)=0\iff\Ext^{\ge1}(-,I)=0$.
>对象 $P$ 投射$\iff\Ext^1(P,-)=0\iff\Ext^{\ge1}(P,-)=0$.
