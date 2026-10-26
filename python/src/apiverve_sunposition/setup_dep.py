from setuptools import setup, find_packages

setup(
    name='apiverve_sunposition',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Sun Position calculates the sun altitude and azimuth, plus compass bearing, for any geographic coordinates and time. Provide latitude and longitude to read sun elevation angles and daylight status; paid plans add panel aiming angles and shadow ratios.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/sunposition?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
