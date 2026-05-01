import airflowIcon from '../assets/Sans titre.png'
import dbtIcon from '../assets/dbt.png'
import gcsIcon from '../assets/google_cloud_storage.png'
import snowflakeIcon from '../assets/snowflake.png'
import sparkIcon from '../assets/apache_spark.png'
import kubernetesIcon from '../assets/kubernetes.png'
import awsIcon from '../assets/aws.png'
import databricksIcon from '../assets/databricks.png'
import pythonIcon from '../assets/python.png'
import dockerIcon from '../assets/docker.png'

export const TOOLS = [
  // Langages de programmation
  { name: 'Python', icon: pythonIcon, category: 'Langages' },
  
  // Bases de données
  { name: 'Snowflake', icon: snowflakeIcon, category: 'Bases de données' },
  { name: 'BigQuery', icon: gcsIcon, category: 'Bases de données' },
  
  // Outils ETL/ELT
  { name: 'dbt', icon: dbtIcon, category: 'ETL/ELT' },
  { name: 'Apache Spark', icon: sparkIcon, category: 'ETL/ELT' },
  { name: 'Databricks', icon: databricksIcon, category: 'ETL/ELT' },
  
  // Orchestration
  { name: 'Apache Airflow', icon: airflowIcon, category: 'Orchestration' },
  
  // Cloud
  { name: 'AWS', icon: awsIcon, category: 'Cloud' },
  { name: 'Google Cloud Storage', icon: gcsIcon, category: 'Cloud' },
  
  // DevOps
  { name: 'Docker', icon: dockerIcon, category: 'DevOps' },
  { name: 'Kubernetes', icon: kubernetesIcon, category: 'DevOps' },
]

export const CATEGORIES = [
  'Tous',
  'Langages',
  'Bases de données',
  'ETL/ELT',
  'Orchestration',
  'Cloud',
  'DevOps',
  'CI/CD',
  'BI',
]
