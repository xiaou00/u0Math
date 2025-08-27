#数学分析 #数学空间

数学中有很多不同的空间, 其中最符合常识的就是Euclid空间.

>[!definition] Euclid空间
>在域$\R$上, $\R^n$对于向量加法:
>$$(\enum{a}{n})+(\enum{b}{n})=(a_1+b_1,a_2+b_2,\ldots,a_n+b_n)$$
>向量数乘:
>$$k(\enum{a}{n})=(\enum{ka}{n})$$
>构成的[[线性空间]], 记作$\mathbb{E}^n$. 在此基础上定义**Euclid范数(2-范数)**:
>$$||(\enum{a}{n})||=\left(\sum_{i=1}^n{a_i^2}\right)^{\frac{1}{2}}$$
>这使得$(\mathbb{E}^n,||\cdot||)$构成[[赋范空间]]. 我们再定义**Euclid度量**:
>$$d(\vec{x},\vec{y})=||\vec{x}-\vec{y}||$$
>这使得$(\mathbb{E}^n,d)$构成[[度量空间]]. 我们再定义**Euclid内积**:
>$$\langle(\enum{x}{n}),(\enum{y}{n})\rangle=\sum_{i=1}^n{x_iy_i}$$
>这使得$(\mathbb{E}^n,\langle\cdot,\cdot\rangle)$构成[[内积空间]]. 我们再定义**Euclid拓扑**:
>Euclid度量$d$定义的所有开球的族$$\mc{B}=\set{B_d(\vec{x},r)|\vec{x}\in\mathbb{E}^n,r\in\R_+}$$为[[基(拓扑)|基]]的拓扑$\T$就是我们要定义的拓扑.
>这使得$(\mathbb{E}^n,\T)$构成[[拓扑空间]]. 
>上述定义的空间就称为**$n$维Euclid空间**(Euclidean space), 记作$(\mathbb{E}^n,+,\cdot,\R,||\cdot||,d,\langle\cdot,\cdot\rangle,\T)$. 一般记作$\mathbb{E}^n$(特别强调Euclid空间时) 或$\R^n$.

>[!warning] Euclid空间只能是有限维的

>[!hint] 总结
>上述定义中, [[实数]]的[[Cartesian积]]赋予了$\mathbb{E}^n$元素, 线性空间赋予了$\mathbb{E}^n$运算性质, 范数为其赋予了长度的概念, 度量赋予距离, 内积赋予角度, 最后由拓扑赋予连续性的概念. 这些概念缺一不可, 正是因为可以定义这么多概念, 赋予了Euclid空间无可比拟的优越性质.



