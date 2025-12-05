#分析 

>[!theorem] Gram-Schmidt定理
>对于[[Hilbert空间]]中任意一个[[线性相关|线性无关]]的有限元素簇$\set{f_1,\ldots,f_k}$, 总能找到[[规范正交]]的$\set{e_1,\ldots,e_k}$, 使得对所有$1\le n\le k$, 
>$$\span\set{e_1,\ldots,e_n}=\span\set{f_1,\ldots,f_n}$$

>[!proof]
>由线性无关的假设, $f_1\ne 0$, 从而取$e_1=\frac{f_1}{\norm{f_1}}$, 现在假定已经找到正交向量$e_1,\ldots,e_k$符合要求, 我们尝试取
>$$e'_{k+1}=f_{k+1}+\sum_{j=1}^k{a_je_j}$$
>为了使得$\langle e'_{k+1},e_j\rangle=0$, 我们要求$a_j=-\langle f_{k+1},e_j\rangle$且$a_j(1\le j\le k)$. 这个选择保证了$e'_{k+1}$正交于$e_1,\ldots,e_k$, 并且由线性无关的假设, $e'_{k+1}$非零. 于是只需取$e_{k+1}=\frac{e'_{k+1}}{\norm{e'_{k+1}}}$变完成了归纳步骤.

