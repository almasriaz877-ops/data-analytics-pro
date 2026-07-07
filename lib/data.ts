export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaDesc: string;
  category: string;
  author: Author;
  publishedDate: string;
  readingTime: string;
  featuredImage: string;
  tableOfContents: { id: string; text: string }[];
  content: string; // Markdown/Rich content parsed or structured
  tags: string[];
  faqs: { question: string; answer: string }[];
}

export interface Project {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  tools: string[];
  timeToComplete: string;
  description: string;
  datasetSource: string;
  overview: string;
  steps: { title: string; instruction: string; code?: string }[];
  outcome: string;
  downloadUrl?: string;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  category: "SQL" | "Python" | "Power BI / Tableau" | "Statistics" | "Data Cleaning & EDA";
  difficulty: "Easy" | "Medium" | "Hard";
  answer: string;
  codeSnippet?: string;
  explanation: string;
}

export const authors: Record<string, Author> = {
  alex: {
    name: "Alex Mercer",
    avatar: "https://picsum.photos/seed/alex/150/150",
    role: "Lead Data Scientist & Educator",
    bio: "Alex is a former FAANG senior data scientist with 8+ years of experience. He specializes in SQL optimization, Python automation, and scaling ML models.",
  },
  sarah: {
    name: "Sarah Jenkins",
    avatar: "https://picsum.photos/seed/sarah/150/150",
    role: "Senior BI Architect",
    bio: "Sarah is a Power BI and Tableau specialist who has designed executive dashboards for Fortune 500 companies. She loves teaching storytelling with data.",
  }
};

export const categories: Category[] = [
  { id: "python", name: "Python", description: "Learn Python syntax, libraries, and script automation for data workflows.", icon: "Terminal", count: 14 },
  { id: "sql", name: "SQL", description: "Master queries, joins, window functions, and database schema design.", icon: "Database", count: 18 },
  { id: "excel", name: "Excel", description: "Formulas, Pivot Tables, Power Query, and basic spreadsheet automation.", icon: "FileSpreadsheet", count: 12 },
  { id: "power-bi", name: "Power BI", description: "DAX formulas, data modeling, and interactive dashboard engineering.", icon: "BarChart3", count: 15 },
  { id: "tableau", name: "Tableau", description: "Advanced calculations, interactive storytelling, and mapping.", icon: "PieChart", count: 11 },
  { id: "pandas", name: "Pandas", description: "The core Python library for data manipulation and alignment.", icon: "Table2", count: 9 },
  { id: "numpy", name: "NumPy", description: "Scientific computing, multi-dimensional arrays, and numerical operations.", icon: "Binary", count: 6 },
  { id: "statistics", name: "Statistics", description: "Probability, hypothesis testing, A/B testing, and statistical models.", icon: "Percent", count: 13 },
  { id: "data-cleaning", name: "Data Cleaning", description: "Handling missing values, deduplication, and parsing messy datasets.", icon: "Eraser", count: 10 },
  { id: "eda", name: "Exploratory Data Analysis", description: "Discovering patterns, spot anomalies, and check assumptions.", icon: "SearchCode", count: 12 },
  { id: "data-visualization", name: "Data Visualization", description: "Design principles, color theory, and chart selections for data storytelling.", icon: "LineChart", count: 15 },
  { id: "web-scraping", name: "Web Scraping", description: "Extracting datasets from websites using BeautifulSoup and Selenium.", icon: "Globe", count: 8 },
  { id: "machine-learning", name: "Machine Learning Basics", description: "Linear regression, decision trees, clustering, and model evaluations.", icon: "Cpu", count: 10 },
  { id: "dashboard-projects", name: "Dashboard Projects", description: "End-to-end dashboard builds with documentation and files.", icon: "LayoutDashboard", count: 8 },
  { id: "case-studies", name: "Case Studies", description: "Real-world business analytics scenarios and problem-solving guides.", icon: "Briefcase", count: 7 },
  { id: "career-tips", name: "Career Tips", description: "Guides on portfolio building, networking, and industry demands.", icon: "GraduationCap", count: 11 },
  { id: "resume", name: "Resume", description: "Resume templates, action-verb usage, and project presentation tips.", icon: "FileText", count: 5 },
  { id: "interview-prep", name: "Interview Questions", description: "Technical, behavioral, and case-study questions with detailed solutions.", icon: "CheckSquare", count: 20 },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "mastering-sql-window-functions-for-data-analytics",
    title: "Mastering SQL Window Functions: The Ultimate Guide for Data Analysts",
    metaDesc: "Learn how to use SQL window functions like ROW_NUMBER, RANK, DENSE_RANK, and SUM OVER with clear, real-world examples and interactive query explanations.",
    category: "SQL",
    author: authors.alex,
    publishedDate: "2026-06-28",
    readingTime: "8 min read",
    featuredImage: "https://picsum.photos/seed/sql/1200/630",
    tableOfContents: [
      { id: "introduction", text: "Introduction to Window Functions" },
      { id: "syntax", text: "Understanding the OVER Clause" },
      { id: "ranking", text: "Ranking Functions: ROW_NUMBER vs RANK" },
      { id: "aggregations", text: "Running Totals and Moving Averages" },
      { id: "lead-lag", text: "Comparing Rows with LEAD and LAG" },
      { id: "conclusion", text: "Best Practices and Performance Tips" }
    ],
    tags: ["SQL", "Databases", "Intermediate SQL", "Advanced Queries"],
    faqs: [
      {
        question: "What is the difference between GROUP BY and SQL window functions?",
        answer: "A GROUP BY query collapses your individual rows into a single summary row. A window function, on the other hand, performs calculations across a set of table rows that are related to the current row, but it preserves the individual identity of each row in the output."
      },
      {
        question: "Are window functions supported in all databases?",
        answer: "Yes, standard ANSI SQL window functions are supported in nearly all modern relational databases, including PostgreSQL, MySQL (8.0+), SQL Server, SQLite, BigQuery, and Snowflake."
      }
    ],
    content: `
### Introduction to Window Functions

For many data analysts, SQL starts with simple calculations: \`SUM()\`, \`AVG()\`, and basic \`GROUP BY\` operations. However, real-world business questions often require more sophisticated operations. For instance, how do you calculate a rolling 30-day sum, compute a month-over-month percentage change, or rank sales representatives within their respective territories?

This is where **SQL Window Functions** come to the rescue. They allow you to perform calculations across a partition of rows while still maintaining individual row data.

### Understanding the OVER Clause

The defining syntax of any window function is the \`OVER\` clause. This tells the SQL engine that we are performing a window calculation rather than a traditional aggregate.

Here is the general syntax:

\`\`\`sql
SELECT 
  employee_id,
  department,
  salary,
  SUM(salary) OVER(PARTITION BY department ORDER BY salary DESC) as running_department_salary
FROM employees;
\`\`\`

Let's break down the three parts of the \`OVER\` clause:
1. **PARTITION BY**: This divides the query result set into partitions (groups). If omitted, the window function treats the entire result set as a single group.
2. **ORDER BY**: This defines the order of rows within each partition. This is vital for functions like running sums or rankings where the sequence of values dictates the result.
3. **ROWS/RANGE**: Specifies the frame of rows to include (e.g., current row and the previous two rows).

> **Tip:** Think of a partition as a "mini-table" inside your database output where the window calculation takes place independently.

### Ranking Functions: ROW_NUMBER vs RANK vs DENSE_RANK

One of the most frequent uses of window functions is ranking rows. Let's look at the differences between \`ROW_NUMBER()\`, \`RANK()\`, and \`DENSE_RANK()\` when evaluating employees with identical salaries:

| Function | Description | Tie Treatment | Next Value After Tie |
| :--- | :--- | :--- | :--- |
| **ROW_NUMBER()** | Assigns a unique sequential integer to each row. | Arbitrary sequential numbering | Next sequential number |
| **RANK()** | Assigns ranks, but leaves gaps after ties. | Same rank for ties | Skips numbers (e.g., 1, 2, 2, 4) |
| **DENSE_RANK()** | Assigns ranks without gaps. | Same rank for ties | Next sequential integer (e.g., 1, 2, 2, 3) |

#### Example SQL:

\`\`\`sql
SELECT 
  name,
  salary,
  ROW_NUMBER() OVER(ORDER BY salary DESC) as row_num,
  RANK() OVER(ORDER BY salary DESC) as rank_val,
  DENSE_RANK() OVER(ORDER BY salary DESC) as dense_rank_val
FROM employees;
\`\`\`

### Running Totals and Moving Averages

Running totals are extremely common in financial reporting. By adding an \`ORDER BY\` clause inside \`OVER()\`, SQL automatically computes an accumulative sum from the start of the partition up to the current row.

\`\`\`sql
SELECT 
  order_date,
  revenue,
  SUM(revenue) OVER(ORDER BY order_date) as running_total_revenue,
  AVG(revenue) OVER(ORDER BY order_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_average_3day
FROM daily_sales;
\`\`\`

*Note: The \`ROWS BETWEEN 2 PRECEDING AND CURRENT ROW\` clause tells SQL to calculate the average using only the current day and the previous 2 days, creating a smooth moving average.*

### Comparing Rows with LEAD and LAG

Have you ever needed to calculate month-over-month revenue growth? To do this, you need to pull a value from a previous row into the current row.

- **LAG(column, offset)**: Fetches values from previous rows.
- **LEAD(column, offset)**: Fetches values from subsequent rows.

\`\`\`sql
SELECT 
  month,
  monthly_revenue,
  LAG(monthly_revenue, 1) OVER(ORDER BY month) as previous_month_revenue,
  (monthly_revenue - LAG(monthly_revenue, 1) OVER(ORDER BY month)) / LAG(monthly_revenue, 1) OVER(ORDER BY month) * 100 as growth_percentage
FROM monthly_sales;
\`\`\`

### Best Practices and Performance Tips

While window functions are powerful, they can be computationally intensive because they require sorting data. Here are three best practices:

1. **Leverage Indexes**: Ensure that columns used in \`PARTITION BY\` and \`ORDER BY\` are indexed where possible to minimize disk-sorting.
2. **Avoid Window Functions in WHERE**: SQL executes window functions *after* the \`WHERE\` clause. If you need to filter results based on a window function calculation (e.g., getting the top-ranked salesperson), wrap your query in a Subquery or a Common Table Expression (CTE).
3. **Use CTEs for Readability**: Complex window functions can make code hard to read. Grouping them inside CTEs makes the logic modular and easier to debug.

\`\`\`sql
-- CTE Example for Clean Code
WITH RankedSales AS (
  SELECT 
    salesperson,
    region,
    total_sales,
    DENSE_RANK() OVER(PARTITION BY region ORDER BY total_sales DESC) as sales_rank
  FROM regional_sales
)
SELECT * 
FROM RankedSales 
WHERE sales_rank <= 3;
\`\`\`
`
  },
  {
    slug: "pandas-data-cleaning-tricks-for-messy-datasets",
    title: "10 Pandas Data Cleaning Tricks for Taming Messy Datasets",
    metaDesc: "Messy data is the enemy of accurate analytics. Discover advanced Pandas techniques to handle missing data, duplicates, datetimes, and custom value mapping.",
    category: "Pandas",
    author: authors.alex,
    publishedDate: "2026-07-02",
    readingTime: "6 min read",
    featuredImage: "https://picsum.photos/seed/pandas/1200/630",
    tableOfContents: [
      { id: "intro", text: "The Reality of Messy Data" },
      { id: "missing", text: "Smart Imputation & Missing Values" },
      { id: "duplicates", text: "Deep Duplicate Analysis" },
      { id: "datetimes", text: "Parsing Messy Datetime Columns" },
      { id: "mapping", text: "Vectorized Mapping & Replacing" },
      { id: "summary", text: "Summary Checklist" }
    ],
    tags: ["Python", "Pandas", "Data Cleaning", "Data Prep"],
    faqs: [
      {
        question: "When should I drop missing values versus imputing them?",
        answer: "Drop missing values if they represent a tiny fraction of your dataset (e.g., < 2%) and have no bias. Impute values (using mean, median, mode, or predictive modeling) when losing those rows would introduce bias or shrink your dataset too severely."
      }
    ],
    content: `
### The Reality of Messy Data

In textbooks, datasets are pristine. In the real world, datasets are loaded with duplicates, malformed dates, mismatched encodings, and missing records. Statistically, data analysts spend over 60% of their project time simply acquiring and cleaning data.

Here are five of our favorite vectorized Pandas recipes to speed up your cleaning workflows and prevent silent analytical errors.

### 1. Smart Imputation of Missing Values

Rather than just using \`.fillna(0)\` or dropping rows entirely, you can impute missing values conditionally. For example, fill missing salaries with the median salary of *that specific job title*:

\`\`\`python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'job_title': ['Analyst', 'Analyst', 'Manager', 'Manager', 'Analyst'],
    'salary': [65000, np.nan, 110000, 105000, 70000]
})

# Impute based on group medians
df['salary'] = df.groupby('job_title')['salary'].transform(lambda x: x.fillna(x.median()))
print(df)
\`\`\`

### 2. Spotting Hidden Duplicates with keep=False

Standard \`df.drop_duplicates()\` keeps the first occurrence. But what if you want to inspect *all* rows that have duplicates to understand why they occurred?

\`\`\`python
# Find all duplicate occurrences for inspection
duplicate_rows = df[df.duplicated(subset=['email'], keep=False)]
\`\`\`

By setting \`keep=False\`, Pandas filters for every row that has a duplicate. This lets you debug user submission errors or upstream database sync duplicates before deleting data.

### 3. Parsing Messy Datetime Columns

Dates come in dozens of different formats. Parsing them manually with Python strings is slow. Use \`pd.to_datetime\` with \`errors='coerce'\` to safely convert values, turning invalid date strings into \`NaT\` (Not a Time) values:

\`\`\`python
df['signup_date'] = pd.to_datetime(df['signup_date'], errors='coerce')
\`\`\`

> **Warning:** Coercing errors into NaT is helpful, but always inspect how many NaT values were generated to ensure you didn't accidentally discard correct dates with unusual formats!

### 4. High-Performance Mapping and Categorization

Avoid using heavy for-loops over DataFrames. Instead, use vectorized operations like \`np.select\` for multi-condition binning, which operates at C-speed:

\`\`\`python
conditions = [
    (df['age'] < 18),
    (df['age'] >= 18) & (df['age'] < 65),
    (df['age'] >= 65)
]
choices = ['Minor', 'Adult', 'Senior']

df['age_group'] = np.select(conditions, choices, default='Unknown')
\`\`\`

### Summary Checklist

When cleaning any dataset, run this standard health check script to get a high-level diagnostic of potential issues:

\`\`\`python
def check_data_health(dataframe):
    print("--- DATASET HEALTH REPORT ---")
    print(f"Total Rows: {len(dataframe)}")
    print(f"Total Columns: {len(dataframe.columns)}\\n")
    
    # Check null values
    nulls = dataframe.isnull().sum()
    nulls_pct = (nulls / len(dataframe)) * 100
    print("Null Columns (Percentage):")
    for col, val in nulls.items():
        if val > 0:
            print(f" - {col}: {val} nulls ({nulls_pct[col]:.2f}%)")
            
    # Check absolute duplicates
    dups = dataframe.duplicated().sum()
    print(f"\\nDuplicate rows found: {dups}")
\`\`\`
`
  },
  {
    slug: "building-high-impact-power-bi-dashboards",
    title: "How to Build High-Impact Power BI Dashboards: UI/UX Principles",
    metaDesc: "Visual analytics is more than just plotting charts. Learn professional UI/UX rules, grid structures, color theory, and DAX hacks for Power BI developers.",
    category: "Power BI",
    author: authors.sarah,
    publishedDate: "2026-07-04",
    readingTime: "7 min read",
    featuredImage: "https://picsum.photos/seed/dashboard/1200/630",
    tableOfContents: [
      { id: "intro", text: "The Problem with 'Chart Junk'" },
      { id: "grid", text: "Designing with a 3-Second Rule Grid" },
      { id: "color", text: "Color Theory for Executive Audiences" },
      { id: "dax", text: "Three High-Utility DAX Optimization Tricks" },
      { id: "conclusion", text: "The Final Checklist" }
    ],
    tags: ["Power BI", "Data Visualization", "DAX", "Business Intelligence"],
    faqs: [
      {
        question: "How many colors should be used in a single dashboard page?",
        answer: "A professional dashboard should adhere to the 60-30-10 rule. 60% dominant light or dark neutral background, 30% supporting gray or dark charcoal for text and card borders, and only 10% accent color (like corporate blue or green) to highlight key visual data points."
      }
    ],
    content: `
### The Problem with 'Chart Junk'

When junior BI developers open Power BI, their first instinct is often to show off. They populate the canvas with pie charts, radial gauges, neon gradients, and nested tables. The result? A cluttered page where executive users cannot answer their primary question: *Are we on track, and what requires our immediate attention?*

This tutorial breaks down the UI/UX design principles utilized by professional BI architects to turn messy data spreadsheets into elite analytical products.

### Designing with a 3-Second Rule Grid

An effective dashboard must pass the **3-Second Rule**: within three seconds of looking at the page, a user should understand:
1. What are the core metrics (KPIs)?
2. Are they positive or negative?
3. Where is the trouble spot?

To achieve this, arrange your dashboard in a **Z-pattern grid** of cognitive hierarchy:

* **Top Left (Premium Real Estate):** Company logo, title, and date filters.
* **Top Row:** 3 to 5 clear, text-based KPI cards (Revenue, Margin, Customer Count, SLA%).
* **Middle Section:** Main trend charts (e.g., line chart of Revenue over time).
* **Bottom Section:** Detailed breakdown or exploratory charts (e.g., bar chart of product categories, regional table).

### Color Theory for Executive Audiences

If everything stands out, nothing stands out. Colorful dashboards look playful but are exhausting to read.

* **Neutral backgrounds**: Choose light gray (\`#F8FAFC\`) or clean white (\`#FFFFFF\`) for standard corporate environments.
* **Muted categories**: Use grays or light slate blue for background lines, grids, and passive columns.
* **Actionable color accents**: Reserve bright colors (like a strong primary blue or targeted red/green for performance status) *strictly* for data points that represent a critical change or alert.

### Three High-Utility DAX Optimization Tricks

A beautiful dashboard is useless if it takes 30 seconds to refresh. Optimize your metrics with these standard DAX optimization patterns:

#### 1. Avoid calculating on columns directly, use Measures
Instead of calculating column counts inline, pre-define your baseline measures to leverage Power BI's cache:
\`\`\`dax
-- Good pattern: Pre-calculated baseline measure
Total Sales = SUM(Sales[Amount])
\`\`\`

#### 2. Replace heavy filtering with KEEPFILTERS
When filtering a visual dynamically, use \`KEEPFILTERS\` inside \`CALCULATE\` to maintain existing context and speed up execution plans:
\`\`\`dax
-- Optimizing context transitions
HighValueSales = CALCULATE(
    [Total Sales],
    KEEPFILTERS(Sales[Amount] > 10000)
)
\`\`\`

#### 3. Use DIVIDE instead of /
The slash (\`/\`) operator throws an error if the denominator is zero. The \`DIVIDE\` function is optimized to automatically handle zero-division gracefully, defaulting to a blank or a custom value while saving CPU cycles:
\`\`\`dax
Margin % = DIVIDE([Profit], [Total Sales], 0)
\`\`\`
`
  }
];

export const projects: Project[] = [
  {
    id: "e-commerce-cohort-analysis",
    title: "E-Commerce Customer Cohort Analysis",
    difficulty: "Intermediate",
    category: "Python & SQL",
    tools: ["PostgreSQL", "Python", "Pandas", "Seaborn"],
    timeToComplete: "4 Hours",
    description: "Analyze e-commerce transaction logs to calculate customer retention cohorts, visualize repeat buying behavior, and pinpoint where users churn.",
    datasetSource: "UCI Machine Learning Repository (Online Retail Dataset)",
    overview: "In this project, you will build an end-to-end analytics pipeline that extracts raw purchase logs, processes them in PostgreSQL, and outputs a customer retention cohort heatmap in Python.",
    outcome: "A beautifully formatted cohort triangle heatmap detailing monthly retention, accompanied by actionable business summaries on where marketing budget is wasted.",
    steps: [
      {
        title: "Step 1: SQL Data Preprocessing",
        instruction: "Calculate the customer's first purchase month and group subsequent transactions.",
        code: `WITH FirstPurchase AS (
  SELECT customer_id, MIN(order_date) as cohort_month
  FROM transactions
  GROUP BY customer_id
)
SELECT 
  t.customer_id,
  f.cohort_month,
  DATE_TRUNC('month', t.order_date) as purchase_month
FROM transactions t
JOIN FirstPurchase f ON t.customer_id = f.customer_id;`
      },
      {
        title: "Step 2: Pivot & Matrix Generation in Pandas",
        instruction: "Read the preprocessed dataset into Pandas, calculate index deltas, and pivot the table to create the retention matrix.",
        code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load your SQL query result
df = pd.read_csv('cohort_data.csv')

# Calculate periods active
df['cohort_index'] = (df['purchase_month_dt'] - df['cohort_month_dt']).apply(lambda x: x.n / 30)

# Pivot and compute percentages
cohort_counts = df.pivot_table(index='cohort_month', columns='cohort_index', values='customer_id', aggfunc='nunique')
cohort_sizes = cohort_counts.iloc[:,0]
retention = cohort_counts.divide(cohort_sizes, axis=0) * 100`
      },
      {
        title: "Step 3: Heatmap Visualization",
        instruction: "Use Seaborn to render a professional heatmap complete with labels and color palettes suited for presentations."
      }
    ]
  },
  {
    id: "executive-financial-dashboard",
    title: "Executive Financial Performance Dashboard",
    difficulty: "Beginner",
    category: "Power BI",
    tools: ["Power BI Desktop", "Power Query", "DAX"],
    timeToComplete: "3 Hours",
    description: "Create an executive-level performance dashboard representing gross revenue, margins, forecasts, and operating expenses by department.",
    datasetSource: "Synthetic Corporate Ledger (CSV Format)",
    overview: "This project walks you through building an executive-ready dashboard in Power BI. You will import raw transaction ledgers, clean them in Power Query, design a star schema model, and write DAX measures for Year-over-Year calculations.",
    outcome: "An interactive 2-page report complete with customized themes, drill-down interactions, and dynamic tooltips.",
    steps: [
      {
        title: "Step 1: Data Modeling and Schema Setup",
        instruction: "Convert flat transactional files into a clean star schema with a central 'FactSales' table connected to 'DimDates', 'DimDepartments', and 'DimProducts'."
      },
      {
        title: "Step 2: Write Key Performance Measures",
        instruction: "Create foundational calculations for dynamic margins and prior year performance comparison.",
        code: `Total Revenue = SUM(FactSales[RevenueAmount])

Revenue LY = CALCULATE(
    [Total Revenue], 
    SAMEPERIODLASTYEAR(DimDates[Date])
)

YoY Revenue Growth = DIVIDE([Total Revenue] - [Revenue LY], [Revenue LY], 0)`
      },
      {
        title: "Step 3: Canvas Layout Design",
        instruction: "Structure the visual elements cleanly with consistent 16px grid spaces, neutral card containers, and highlighted focus metrics."
      }
    ]
  },
  {
    id: "web-scraping-job-market-analyzer",
    title: "Web Scraping Job Market Analyzer",
    difficulty: "Advanced",
    category: "Web Scraping & NLP",
    tools: ["Python", "BeautifulSoup", "NLTK", "Matplotlib"],
    timeToComplete: "6 Hours",
    description: "Scrape job postings from online portals to extract, clean, and rank the most in-demand technical skills for modern Data Analysts.",
    datasetSource: "Live Job Board Scrapes (Legal APIs)",
    overview: "Automate skill gap analysis! In this project, you will write a robust Python crawler that safely extracts job postings, cleans description text with Natural Language Processing, and outputs a dynamic leaderboard of required tools (e.g. SQL, Python, Excel).",
    outcome: "A real-time dashboard plotting the frequency of required technologies across active job markets.",
    steps: [
      {
        title: "Step 1: Scrape Job Details",
        instruction: "Use BeautifulSoup to parse HTML tags and extract job descriptions, titles, and company names.",
        code: `import requests
from bs4 import BeautifulSoup

url = "https://example-job-portal.com/jobs?q=data+analyst"
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
soup = BeautifulSoup(response.text, 'html.parser')

descriptions = []
for card in soup.find_all('div', class_='job-card'):
    desc_url = card.find('a')['href']
    desc_page = requests.get(desc_url)
    descriptions.append(BeautifulSoup(desc_page.text, 'html.parser').find('div', class_='description').text)`
      },
      {
        title: "Step 2: NLP Keyword Extraction",
        instruction: "Deduplicate listings, convert text to lowercase, tokenize sentences, and count occurrences of predefined analytical skills."
      },
      {
        title: "Step 3: Graph Technical Demands",
        instruction: "Create horizontal bar charts sorting the technical tools in descending order, displaying clear visual takeaways."
      }
    ]
  }
];

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "q1",
    question: "What is the difference between WHERE and HAVING in SQL?",
    category: "SQL",
    difficulty: "Easy",
    answer: "WHERE filters rows before any groupings are made. HAVING filters groups of rows after GROUP BY is applied.",
    explanation: "SQL execution order starts with FROM, then JOINs, then WHERE. Therefore, WHERE filters individual source rows. Next, GROUP BY is executed. Finally, HAVING is evaluated to filter the aggregated results.",
    codeSnippet: `-- WHERE filters individual orders
SELECT category, SUM(revenue) 
FROM sales 
WHERE order_date >= '2026-01-01'
GROUP BY category 
-- HAVING filters the aggregated category totals
HAVING SUM(revenue) > 50000;`
  },
  {
    id: "q2",
    question: "How do you handle missing or NULL values in a Pandas DataFrame?",
    category: "Python",
    difficulty: "Easy",
    answer: "Use fillna() to replace nulls, dropna() to delete rows, or interpolate() for sequential estimates.",
    explanation: "For numerical columns, replacing with df['col'].median() is standard. For categorical data, using 'Unknown' or df['col'].mode()[0] is safer. For time series, ffill() (forward fill) or bfill() (backward fill) preserves temporal sequences.",
    codeSnippet: `# Fill missing values in Python
df['salary'] = df['salary'].fillna(df['salary'].median())

# Drop rows where critical identifier is missing
df = df.dropna(subset=['customer_id'])`
  },
  {
    id: "q3",
    question: "Explain the difference between Left Join, Right Join, and Inner Join.",
    category: "SQL",
    difficulty: "Easy",
    answer: "Inner Join returns matches only. Left Join keeps all left-table rows; Right Join keeps all right-table rows.",
    explanation: "If there is no match on the corresponding side, columns from the missing side will contain NULL values.",
    codeSnippet: `-- Left Join keeps all customers, even those without orders
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;`
  },
  {
    id: "q4",
    question: "What is a Star Schema vs a Snowflake Schema in data modeling?",
    category: "Power BI / Tableau",
    difficulty: "Medium",
    answer: "Star schemas have denormalized dimensions (flat tables). Snowflake schemas have normalized dimensions (split tables).",
    explanation: "For tools like Power BI, a Star Schema is highly optimized because it reduces table joints and makes DAX queries simpler and faster. Snowflake schemas reduce redundancy but degrade report performance due to complex relational links.",
  },
  {
    id: "q5",
    question: "How do you write a SQL query to find the second-highest salary in an employee table?",
    category: "SQL",
    difficulty: "Medium",
    answer: "Use subqueries, CTEs with DENSE_RANK(), or OFFSET clause depending on engine support.",
    explanation: "Using a CTE with DENSE_RANK() is the most robust way because it correctly handles ties (multiple employees with the same top salary).",
    codeSnippet: `WITH RankedSalaries AS (
  SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank_val
  FROM employees
)
SELECT salary 
FROM RankedSalaries 
WHERE rank_val = 2;`
  },
  {
    id: "q6",
    question: "What is overfitting in Machine Learning, and how do you prevent it?",
    category: "Statistics",
    difficulty: "Medium",
    answer: "Overfitting is when a model learns training noise instead of signals. Prevent it with cross-validation, regularization, or simpler models.",
    explanation: "An overfitted model performs phenomenally well on training data but fails to generalize to unseen test data. Solutions include using L1/L2 regularization, limiting tree depth in random forests, or increasing training sample sizes."
  },
  {
    id: "q7",
    question: "What is an A/B test, and how do you determine if a result is statistically significant?",
    category: "Statistics",
    difficulty: "Hard",
    answer: "An A/B test is a randomized experiment with two variants. Significance is verified by calculating the p-value and comparing it to alpha (usually 0.05).",
    explanation: "If the calculated p-value is less than your significance level (alpha, e.g., 5%), you reject the null hypothesis and conclude that the difference between the two variants is unlikely to have occurred by chance.",
  },
  {
    id: "q8",
    question: "Explain SQL Window Functions and name three common ones.",
    category: "SQL",
    difficulty: "Hard",
    answer: "They perform calculations across rows related to the current row without grouping. Common ones: ROW_NUMBER, LEAD, LAG.",
    explanation: "Unlike aggregation, which reduces rows, window functions execute on partitions of records and preserve individual row detail.",
  }
];

export const faqs: FAQ[] = [
  {
    question: "What is Data Analytics Pro?",
    answer: "Data Analytics Pro is an elite, fully responsive learning hub designed to teach modern, real-world data analytics concepts. We provide high-quality, practical articles, technical projects, curated interview prep, and an interactive career roadmap."
  },
  {
    question: "Are the projects based on real-world datasets?",
    answer: "Yes. Every single project we feature is designed around real, public datasets like the UCI Machine Learning Repository or Google Cloud BigQuery public files, ensuring you build a portfolio that impresses hiring managers."
  },
  {
    question: "Do I need a strong math background to start?",
    answer: "No. While understanding basic statistics is helpful, our guides break down complex statistical formulas into clear, intuitive examples using Python and visual charts. You can learn as you go!"
  },
  {
    question: "Is this content suitable for absolute beginners?",
    answer: "Absolutely! Our interactive career roadmap starts with absolute essentials like Excel and SQL basics, gradually building up to advanced Python automation and machine learning structures."
  }
];
