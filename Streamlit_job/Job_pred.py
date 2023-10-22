from joblib import load
import pandas as pd
import streamlit as st


skillMapper = ['C/C++', 'Data Mining', 'Data Science', 'Excel', 'Google Drive', 'HR', 'Java', 'MS OFFICE', 'Machine Learning', 'Marketing', 'SEO', 'Word Press']
expertiseMapper = ['Accounting', 'Advertising', 'Asset Management', 'Customer Relations', 'Customer Service', 'Data Analyst', 'Finances', 'Human Resources', 'Legal Department', 'ML Engineer', 'Media Relations', 'Payroll', 'Public Relations', 'Quality Assurance', 'Research and Development', 'Sales and Marketing', 'Tech Support', 'Web Developer']


model = load('model.joblib')


st.title("Welcome to Job Role Finder :)")



skill1 = st.selectbox("Skill 1", skillMapper)

skill2 = st.selectbox("Skill 2", skillMapper)

skill3 = st.selectbox("Skill 3", skillMapper)

def predict():
    test_data = [ skillMapper.index(skill1), skillMapper.index(skill2), skillMapper.index(skill3)]
    test_data = pd.DataFrame(test_data)
    test_data_t = test_data.transpose()
    if(len(model.predict(test_data_t)[0])!=0):
        st.success('Suggested Job Role ' + str(model.predict(test_data_t)[0]))
    else:
        st.error('No Job Role Found')



trigger = st.button('Predict', on_click=predict)