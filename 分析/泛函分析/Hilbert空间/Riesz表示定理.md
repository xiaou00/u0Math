#分析 

>[!theorem] Riesz表示定理
>令$L$为[[Hilbert空间]]$\mc H$上的连续(有界)[[线性泛函]], 则存在唯一的$g\in\mc H$, 使得
>$$L(f)=\langle f,g\rangle$$
>对任意$f\in\mc H$成立. 并且$\norm{L}_{\rm op}=\norm g$.

>[!proof]
>考虑$\mc H$的对于$L$的[[核(算子)|核]](零空间)
>$$\mc S=\set{f\in\mc H:L(f)=0}$$
>由于$L$连续, 子空间$\mc S$是闭的, 这是因为连续线性泛函(连续映射)下, 闭集$\set{0}$的原像是闭集(连续映射定义). 
>
>若$\mc S=\mc H$, 则$L=0,g=0$. 否则$\mc S^\perp$是非平凡的, 并且可以选取任何$h\in\mc S^\perp$使其满足$\norm h=1$(只需取非零向量$x$然后取$x/\lVert{x}\rVert$). 有了$h$, 我们即可令$g=\overline{L(h)}\cdot h$, 因为对任意$f$, 若令
>$$u=L(f)\cdot h-L(h)\cdot f$$
>显然
>$$L(u)=L(L(f)\cdot h-L(h)\cdot f)=L(f)\cdot L(h)-L(h)\cdot L(f)=0$$
>因此由定义$u\in\mc S$. 从而$\langle u,h\rangle=0$. 因此$$\begin{aligned}0=&\langle L(f)\cdot h-L(h)\cdot f,h\rangle\\=&\langle L(f)\cdot h,h\rangle-\langle L(h)\cdot f,h\rangle=L(f)\langle h,h\rangle-\langle f,\overline{L(h)}\cdot h\rangle\end{aligned}$$
>由于$\langle h,h\rangle=\norm h^{1/2}=1$, $g=\overline{L(h)}\cdot h$, 这就得到了
>$$L(f)=\langle f,g\rangle$$
>并且由于$\norm h=1$,
>$$\norm{g}=|L(h)|\cdot\norm h=|L(h)|$$
>显然$\norm{L}_{\rm op}\le\norm g$, 下面证明等式另一半. 由[[Cauchy-Schwarz不等式]],
>$$|L(f)|=|\langle f,g\rangle|\le\norm f\cdot\norm g$$
>因此
>$$\frac{|L(f)|}{\norm f}\le\norm g$$
>取上确界有
>$$\norm{L}_{\rm op}=\sup_{f\ne0}{\frac{|L(f)|}{\norm f}}\le\norm g$$
>这是算子范数的等价定义, 因此等式成立. 证毕.

