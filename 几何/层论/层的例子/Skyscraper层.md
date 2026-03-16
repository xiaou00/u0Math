#代数 

Skyscraper层是一个经典的[[层]]构造. 令 $X$ 为拓扑空间, $p\in X$. 令 $S$ 是集合. 设 $i_p:\set{p}\to X$ 为包含映射. 那么我们定义
$$i_{p,*}S(U)=\begin{cases}
S&p\in U\\
\set{\mathrm{pt}}&p\notin U
\end{cases}$$
此处, $\set{\mathrm{pt}}$ 是任意单元素集合. 对于包含关系 $V\subset U$, 限制映射如下:
- 若 $p\in V$, 则映射为 $\mathrm{res}_{UV}=\mathbb 1:S\to S$;
- 若 $p\notin V$ 且 $p\in U$, 则映射为 $S\to\set{\mathrm{pt}}$;
- 若 $p\notin U$, 则映射为恒大映射 $\set{\mathrm{pt}}\to\set{\mathrm{pt}}$.

