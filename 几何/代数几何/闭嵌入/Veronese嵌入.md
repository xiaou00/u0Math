#代数几何 

Veronese嵌入是一种将低维[[射影空间]] $\mathbb P^n$ 嵌入高维射影空间 $\mathbb P^N$ 的方式, 并且保持了代数上的完美性.

>[!thm] 定理1
>线性空间的单线性映射 $V\into W$ 诱导[[线性空间的射影化|射影化]]的闭嵌入 $\mathbb PV\into\mathbb PW$.

我们来看一个引例, 对于 $S_\bullet=k[x,y]$, 其对应的射影概形 $\Proj~S_\bullet=\mathbb P^1$. 考虑[[Veronese子环]] $S_{2\bullet}=k[x^2,xy,y^2]\subset k[x,y]$. 代数上它同构于
$$k[u,v,w]/(uw-v^2)$$
构造同构容易验证. ($u,v,w\mapsto x^2,xy,y^2$). 由[[Veronese子环|此页面定理1]]有同构 $\Proj~S_\bullet\simeq\Proj~S_{2\bullet}\simeq\mathbb P^1$. 上述环同构又又到了闭嵌入
$$\mathbb P^1\simeq\Proj~S_\bullet\simeq\Proj~S_{2\bullet}\simeq\Proj~k[u,v,w]/(uw-v^2)\into\Proj~k[u,v,w]\simeq\mathbb P^2$$
这就诱导了嵌入 $\mathbb P^1\into\mathbb P^2$, 一般地, 我们有

>[!def] Veronese嵌入
>设 $S_\bullet=k[x_0,\ldots,x_n]$, 则有Veronese子环 $S_{d\bullet}=k\left[x_0^{a_0}x_1^{a_1}\cdots x_n^{a_n}|\sum a_i=d\right]$, 那么自然存在一个更大的环
>$$k[y_0,\ldots,y_{N-1}]\onto S_{d\bullet},\quad y_i\mapsto M_i$$
>其中 $N$ 是 $x_0,\ldots,x_n$ 上齐次 $d$ 度多项式组成线性空间的维数, $M_i$ 是形如 $x_0^{a_0}x_1^{a_1}\cdots x_n^{a_n}$ 的度为 $d$ 的单项式. 这诱导了闭嵌入
>$$\mathbb P^n\simeq\Proj~S_\bullet\simeq\Proj~S_{d\bullet}\xhookrightarrow{v_d}\Proj~k[y_0,\ldots,y_{N_1}]\simeq\mathbb P^{N-1}$$
>称为 $d$-**Veronese嵌入** (Veronese embedding).

显然, 组合学可以验证 $N=\binom{n+d}{d}$, 并且 $v_d$ 是一个闭嵌入.