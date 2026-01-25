#分析 

>[!thm] Cauchy积分公式
>设函数$f$在圆盘$D$以及其边界的开集中是全纯的, $C$表示圆盘的边界, 并且取正方向, 那么对任意$z\in D$, 都有
>$$f(z)=\frac1{2\pi\i}\oint_C{\frac{f(\zeta)}{\zeta-z}\,\d\zeta}$$

>[!pf]
>取定点$z\in D$, 我们考虑在$z$的位置挖洞, 并构造"锁孔"曲线$\Gamma_{\delta,\epsilon}$, 其中$\delta$是走廊宽度, $\epsilon$是洞的半径, 如下图所示:
>```tikz
\begin{document}
\usetikzlibrary{decorations.markings}
\tikzset{
mid arrow/.style={
decoration={
markings,
mark=at position 0.5 with {\large\arrow{latex}} 
},
postaction={decorate}
}
}
\def\deg{3}
\begin{tikzpicture}
\filldraw (0.7,0.7) circle (1pt) node[below right] {$z$};
\draw[mid arrow] ({0.7+0.5*cos(30)},{0.7+0.5*sin(30)}) arc (390:55:0.5);
\draw[mid arrow] ({2*cos(45+\deg)},{2*sin(45+\deg)}) arc ({45+\deg}:401:2) node[above left,pos=0.25] {$\Gamma_{\delta,\epsilon}$};
\draw[mid arrow] ({2*cos(45-\deg)},{2*sin(45-\deg)})--({0.7+0.5*cos(30)},{0.7+0.5*sin(30)});
\draw[mid arrow] ({0.7+0.5*cos(55)},{0.7+0.5*sin(55)})--({2*cos(45+\deg)},{2*sin(45+\deg)});
\end{tikzpicture}
\end{document}
>```
>因为函数$F(\zeta)=f(\zeta)/(\zeta-z)$在远离$\zeta=z$的点是全纯的, 从而有[[Cauchy-Goursat定理]], 选取合适的周线可得
>$$\oint_{\Gamma_{\delta,\epsilon}}{F(\zeta)\,\d\zeta}=0\tag{I}$$
>我们使$\delta\to 0$, 由函数$F$的连续性, 走廊上两个方向上的积分抵消, 剩下的部分由两条曲线组成: 外面的大圆周$C$, 以及$z$为中心, $\epsilon$为半径的**负方向**圆周$C_\epsilon$. 考虑小圆周上的积分, 先将$F(\zeta)$作平凡的代数变形得
>$$F(\zeta)=\frac{f(\zeta)-f(z)}{\zeta-z}+\frac{f(z)}{\zeta-z}$$
>由于$f$全纯, 上式等号右边的第一项是有界的, 因此当$\epsilon\to 0$时其在$C_\epsilon$上的积分也趋于0. 考察第二项的积分
>$$\oint_{C_\epsilon}{\frac{f(z)}{\zeta-z}\,\d\zeta}=f(z)\oint_{C_\epsilon}{\frac1{\zeta-z}\,\d\zeta}=-f(z)\int_0^{2\pi}{\frac{\epsilon\i\e^{-\i t}}{\epsilon\e^{-\i t}}\d t}=-f(z)2\pi\i$$
>从而
>$$f(z)=-\frac1{2\pi\i}\oint_{C_\epsilon}{\frac{f(z)}{\zeta-z}\,\d\zeta}$$
>由(I)且$C_\epsilon,C$定向相反, 其上的积分互为相反数, 这就证明了
>$$f(z)=\frac1{2\pi\i}\oint_{C}{\frac{f(z)}{\zeta-z}\,\d\zeta}$$

>[!cor] 推论1
>开集$\Omega\subset\C$上的全纯函数$f$的导函数$f'$也是全纯的. 也就是说$f\in\csp^\infty$. 并且如果$C\subset\Omega$是正向圆周且其内部也在$\Omega$内, 那么
>$$f^{(n)}(z)=\frac{n!}{2\pi\i}\oint_C{\frac{f(\zeta)}{(\zeta-z)^{n+1}}\,\d\zeta}$$
>其中$z$可以是$C$内部任一点.

简单的代数归纳就能说明上述定理, 下面的定理更是奠定了全纯函数的优越性质:

>[!cor] 推论2
>$\Omega\subset\C\to\C$上全纯函数都是[[解析函数]].

>[!pf]
>任取$z\in\Omega$, 由Cauchy积分公式
>$$f(z)=\frac1{2\pi\i}\oint_C{\frac{f(\zeta)}{\zeta-z}\,\d\zeta}$$
>其中$C$表示圆盘的边界, 因为
>$$\frac{1}{\zeta-z}=\frac1{\zeta-z_0-(z-z_0)}=\frac1{\zeta-z_0}\cdot\frac1{1-\left(\dfrac{z-z_0}{\zeta-z_0}\right)}$$
>其中$\zeta\in\C,z\in D$, 那么必然存在$0<r<1$使得
>$$\left|\frac{z-z_0}{\zeta-z_0}\right|<r$$
>因此可以展开为几何级数
>$$\frac1{1-\left(\dfrac{z-z_0}{\zeta-z_0}\right)}=\sum_{n=0}^\infty{\left(\dfrac{z-z_0}{\zeta-z_0}\right)^n}$$
>次级数对任意$\zeta\in\C$收敛, 从而由[[Fubini定理]], 将无穷项和与积分交换有
>$$f(z)=\sum_{n=0}^\infty{\left(\frac1{2\pi\i}\oint_{C}{\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,\d\zeta}\right)\cdot(z-z_0)^n}$$
>这就证明了级数展开.

