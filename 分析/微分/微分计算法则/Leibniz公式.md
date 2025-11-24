#分析 

>[!theorem] Leibniz公式
>设函数$f,g\in\csp^n$, 则$fg\in\csp^n$, 那么
>$$(fg)^{(n)}=\sum_{k=0}^n{\binom{n}{k}f^{(n-k)}g^{(k)}}$$
>规定$f^{(0)}=f,g^{(0)}=g$.

>[!proof]
>只需证明
>$$(fg)^{(n)}=\sum_{i+j=n}\frac{n!}{i!j!}f^{(i)}g^{(j)}$$
>当$n=1$时显然成立([[Leibniz乘积法则]]), 下面设$n=m$成立, 来看$n=m+1$的情况.
>$$\begin{aligned}(fg)^{(m+1)}&=\left[(fg)^{(m)}\right]'=\left[\sum_{i+j=m}\frac{m!}{i!j!}f^{(i)}g^{(j)}\right]'\\&=\sum_{i+j=m}\frac{m!}{i!j!}\left[f^{(i)}g^{(j)}\right]'\\&=\sum_{i+j=m}\frac{m!}{i!j!}\left[f^{(i+1)}g^{(j)}+f^{(i)}g^{(j+1)}\right]\\&=\sum_{i+j=m}\frac{m!}{i!j!}f^{(i+1)}g^{(j)}+\sum_{i+j=m}\frac{m!}{i!j!}f^{(i)}g^{(j+1)}\end{aligned}$$
>第一个和式用$i=i-1$代入, 第二个和式用$j=j-1$代入, 有
>$$\begin{aligned}
&=\sum_{i-1+j=m}{\frac{m!}{(i-1)!j!}f^{(i)}g^{(j)}}+\sum_{i+j-1=m}{\frac{m!}{i!(j-1)!}f^{(i)}g^{(j)}}\\
&=\sum_{i+j=m+1}{\frac{m!i}{i!j!}f^{(i)}g^{(j)}}+\sum_{i+j=m+1}{\frac{m!j}{i!j!}f^{(i)}g^{(j)}}\\
&=\sum_{i+j=m+1}{\left(\frac{m!i}{i!j!}+\frac{m!j}{i!j!}\right)f^{(i)}g^{(j)}}=\sum_{i+j=m+1}{\frac{m!(i+j)}{i!j!}f^{(i)}g^{(j)}}\\
&=\sum_{i+j=m+1}{\frac{m!(m+1)}{i!j!}f^{(i)}g^{(j)}}=\sum_{i+j=m+1}{\frac{(m+1)!}{i!j!}f^{(i)}g^{(j)}}
\end{aligned}$$
>由数学归纳原理即证对任意$n\in\N^*$成立.

